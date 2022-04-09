import * as React from 'react';

import './main.css'
import Header from './components/Header';
import CssBaseline from '@mui/material/CssBaseline';
import DeviceCard from './components/DeviceCard';
import DevicesContainer from './components/DevicesContainer';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            exploreHD_cards: [], 
            other_cards: []
        };

        this.addCard = this.addCard.bind(this);
    }

    addCard(device) {
        if (device.caps.driver) {
            this.setState({
                exploreHD_cards: this.state.exploreHD_cards.concat(
                    <DeviceCard key={ this.state.exploreHD_cards.length } device={ device } >
                        {/* { this.state.exploreHD_cards.length == 0 ? <Button color="grey" variant="contained" style={{ marginTop: '10px' }}>Set as Default</Button> : undefined } */}
                    </DeviceCard>
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

    render() {
        return (
            <>
                <CssBaseline />
                <Header />
                <div style={{ minHeight: '64px' }} />
                <div style={{ overflowY: 'auto', height: 'calc(100vh - 64px)' }}>
                    <DevicesContainer>
                        { this.state.exploreHD_cards }
                        { this.state.other_cards }
                    </DevicesContainer>
                </div>
            </>
        )
    }
}
