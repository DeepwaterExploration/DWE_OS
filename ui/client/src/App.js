import * as React from 'react';

import './main.css'
import Header from './components/Header';
import { Button, CssBaseline } from '@mui/material';
import DeviceCard from './components/DeviceCard';
import DevicesContainer from './components/DevicesContainer';


export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: []
        };

        this.addCard = this.addCard.bind(this);
    }

    addCard(device) {
        this.setState({
            cards: this.state.cards.concat(
                <DeviceCard key={ this.state.cards.length } device={ device }>
                    { this.state.cards.length == 0 ? <Button color="grey" variant="contained" style={{ marginTop: '10px' }}>Set as Default</Button> : undefined }
                </DeviceCard>
            )
        })
    }

    componentDidMount() {
        fetch('/devices')
            .then((response) => response.json())
            .then((data) => {
                let devices = data.devices;
                for (let device of devices) {
                    this.addCard(device);
                }
            })
    }

    render() {
        return (
            <>
                <CssBaseline />
                <Header />
                <div style={{ minHeight: '64px' }} />
                <div style={{ overflowY: 'auto', height: 'calc(100vh - 64px)' }}>
                    <DevicesContainer>
                        {/* <DeviceCard device="/dev/video2">
                            <Button color="grey" variant="contained" style={{ marginTop: '10px' }}>Set as Default</Button>
                        </DeviceCard>
                        <DeviceCard device="/dev/video4" />
                        <DeviceCard device="/dev/video6" /> */}
                        { this.state.cards }
                    </DevicesContainer>
                </div>
            </>
        )
    }
}
