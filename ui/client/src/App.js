import * as React from 'react'

import './main.css'

import { lightTheme, darkTheme } from './themes'
import { makePostRequest } from './utils/utils'
import DeviceCard from './components/DeviceCard'

import { io } from 'socket.io-client'

import Dashboard from './components/dashboard'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      exploreHD_cards: [],
      other_cards: [],
      theme: localStorage.getItem('theme') == 'dark' ? darkTheme : lightTheme,
    }

    this.addCard = this.addCard.bind(this)

    this.updateTheme = this.updateTheme.bind(this)
    this.resetSettings = this.resetSettings.bind(this)
    this.socket = io()
  }

  addCard(device) {
    if (device.caps.driver) {
      this.setState({
        exploreHD_cards: this.state.exploreHD_cards.concat(
          <DeviceCard key={this.state.exploreHD_cards.length} device={device} />
        ),
      })
    } else {
      this.setState({
        other_cards: this.state.other_cards.concat(
          <DeviceCard key={this.state.other_cards.length} device={device} />
        ),
      })
    }
  }

  addDevices(devices) {
    for (let device of devices) {
      this.addCard(device)
    }
  }

  removeDevice(device) {
    let devicePath = device.devicePath
    if (device.caps.driver) {
      this.setState({
        exploreHD_cards: this.state.exploreHD_cards.filter(
          (ehd) => ehd.props.device.devicePath != devicePath
        ),
      })
    } else {
      this.setState({
        other_cards: this.state.other_cards.filter(
          (dev) => dev.props.device.devicePath != devicePath
        ),
      })
    }
  }

  componentDidMount() {
    fetch('/devices')
      .then((response) => response.json())
      .then((devices) => this.addDevices(devices))
    this.socket.on('added', (addedDevices) => {
      this.addDevices(addedDevices)
    })
    this.socket.on('removed', (removedDevices) => {
      for (let device of removedDevices) {
        this.removeDevice(device)
      }
    })
  }

  updateTheme(e) {
    localStorage.setItem('theme', e.target.checked ? 'dark' : 'light')
    this.setState({ theme: e.target.checked ? darkTheme : lightTheme })
  }

  resetSettings() {
    makePostRequest('/resetSettings', {}, () => window.location.reload())
  }

  render() {
    return Dashboard({
      props: this.props,
      state: this.state,
      updateTheme: this.updateTheme,
      resetSettings: this.resetSettings,
    })
  }
}
