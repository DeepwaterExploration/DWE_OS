import * as React from 'react';

import './main.css';

import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import ListItem from '@mui/material/ListItem';
import Switch from '@mui/material/Switch';
import ThemeProvider from '@mui/system/ThemeProvider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { lightTheme, darkTheme } from './themes';
import { makePostRequest } from './utils/utils';
import DevicesContainer from './components/DevicesContainer';
import DeviceCard from './components/DeviceCard';
import Header from './components/Header';

import { io } from 'socket.io-client';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            exploreHD_cards: [], 
            other_cards: [], 
            theme: localStorage.getItem('theme') == 'dark' ? darkTheme : lightTheme
        };

        this.addCard = this.addCard.bind(this);
        this.updateTheme = this.updateTheme.bind(this);
        this.resetSettings = this.resetSettings.bind(this);
        this.socket = io();
    }

    addCard(device) {
        if (device.caps.driver) {
            this.setState({
                exploreHD_cards: this.state.exploreHD_cards.concat(
                    <DeviceCard key={ this.state.exploreHD_cards.length } device={ device } />
                )
            });
        } else {
            this.setState({
                other_cards: this.state.other_cards.concat(
                    <DeviceCard key={ this.state.other_cards.length } device={ device } />
                )
            });
        }
    }

    addDevices(devices) {
        for (let device of devices) {
            this.addCard(device);
        }
    }

    removeDevice(device) {
        let devicePath = device.devicePath;
        if (device.caps.driver) {
            this.setState({
                exploreHD_cards: this.state.exploreHD_cards.filter((ehd) => ehd.props.device.devicePath != devicePath)
            });
        } else {
            this.setState({
                other_cards: this.state.other_cards.filter((dev) => dev.props.device.devicePath != devicePath)
            });
        }
    }

    componentDidMount() {
        fetch('/devices')
            .then((response) => response.json())
            .then((devices) => this.addDevices(devices));
        this.socket.on('added', (addedDevices) => {
            this.addDevices(addedDevices);
        });
        this.socket.on('removed', (removedDevices) => {
            for (let device of removedDevices) {
                this.removeDevice(device);
            }
        });
    }

    updateTheme(e) {
        localStorage.setItem('theme', e.target.checked ? 'dark' : 'light');
        this.setState({theme: e.target.checked ? darkTheme : lightTheme});
    }

    resetSettings() {
        makePostRequest('/resetSettings', {}, () => window.location.reload());
    }

    render() {
        return (
            <ThemeProvider theme={this.state.theme}>
                <CssBaseline />
                <Header drawerItems={
                    <>
                        <ListItem>
                            <FormControlLabel onChange={ this.updateTheme }
                                control={
                                    <Switch checked={ this.state.theme == darkTheme } name="Theme" />
                                } label={ 
                                    <Typography color="text.secondary">{ this.state.theme == darkTheme ? 'Dark Theme' : 'Light Theme' }</Typography>
                                }
                            />
                        </ListItem>
                        <ListItem>
                            <Button color="primary" variant="contained" onClick={ this.resetSettings }>Reset Settings</Button>
                        </ListItem>
                    </>
                }>
                </Header>
                <div style={{ minHeight: '64px' }} />
                <div style={{ overflowY: 'auto', height: 'calc(100vh - 64px)' }}>
                    <DevicesContainer>
                        { this.state.exploreHD_cards }
                        { this.state.other_cards }
                    </DevicesContainer>
                </div>
            </ThemeProvider>
        )
    }
}
