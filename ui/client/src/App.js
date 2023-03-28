import * as React from 'react'

import './main.css'

import Dashboard from './components/dashboard'

export default class App extends React.Component {
  render() {
    return <Dashboard />
    // return Dashboard({
    //   props: this.props,
    //   state: this.state,
    //   updateTheme: this.updateTheme,
    //   resetSettings: this.resetSettings,
    // })
  }
}

// refreshCards() {
//   makePostRequest('getCards', {}).then((response) => {
//     this.setState({
//       exploreHD_cards: response.exploreHD_cards,
//       other_cards: response.other_cards,
//     })
//   })
// }

// componentDidMount() {
//   this.refreshCards()

//   const socket = io('http://localhost:3000')

//   socket.on('update', (data) => {
//     console.log(data)
//     this.refreshCards()
//   })
// }
