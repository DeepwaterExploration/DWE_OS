import * as React from 'react';

import './main.css'
import Header from './components/Header';
import { Button, CssBaseline } from '@mui/material';
import DeviceCard from './components/DeviceCard';
import DevicesContainer from './components/DevicesContainer';


export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <CssBaseline />
                <Header />
                <DevicesContainer>
                    <DeviceCard device="/dev/video2">
                        <Button color="grey" variant="contained" style={{ marginTop: '10px' }}>Set as Default</Button>
                    </DeviceCard>
                    <DeviceCard device="/dev/video4" />
                    <DeviceCard device="/dev/video6" />
                </DevicesContainer>
            </>
        )
    }
}
