import * as React from 'react';

import './main.css'
import Header from './components/Header';
import CssBaseline from '@mui/material/CssBaseline';
import DeviceCard from './components/DeviceCard';
import DevicesContainer from './components/DevicesContainer';
import FormControlLabel from '@mui/material/FormControlLabel';
import ListItem from '@mui/material/ListItem';
import Switch from '@mui/material/Switch';
import ThemeProvider from '@mui/system/ThemeProvider';
import Typography from '@mui/material/Typography';

import { lightTheme, darkTheme } from './themes';

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

    componentDidMount() {
        fetch('/devices')
            .then((response) => response.json())
            .then((devices) => {
                for (let device of devices) {
                    this.addCard(device);
                }
            })
    }

    updateTheme(e) {
        localStorage.setItem('theme', e.target.checked ? 'dark' : 'light');
        this.setState({theme: e.target.checked ? darkTheme : lightTheme});
    }

    render() {
        return (
            <ThemeProvider theme={this.state.theme}>
                <CssBaseline />
                <Header drawerItems={
                    <ListItem>
                        <FormControlLabel onChange={ this.updateTheme }
                            control={
                                <Switch checked={ this.state.theme == darkTheme } name="Theme" />
                            } label={ 
                                <Typography color="text.secondary">{ this.state.theme == darkTheme ? 'Dark Theme' : 'Light Theme' }</Typography>
                            }
                        />
                    </ListItem>
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
