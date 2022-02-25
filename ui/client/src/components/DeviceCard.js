import { ConstructionOutlined, Settings } from "@mui/icons-material";
import { Button, Card, CardContent, CardHeader, FormControlLabel, FormGroup, Grid, IconButton, Slider, Switch, Typography } from "@mui/material";
import React, { createRef, useState } from "react";

function SupportingText(props) {
    return (
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom marginBottom='14px'>
            { props.children }
        </Typography>
    )
}

function DeviceSwitch(props) {
    return (
        <FormControlLabel onChange={ props.onChange } sx={{mt: '-10px'}} control={ <Switch name={ props.name } checked={props.checked} /> } label={ 
            <Typography color="text.secondary">{ props.text }</Typography>
        } />
    )
}

class DeviceOptions extends React.Component {
    constructor(props) {
        super(props);

        this.device = props.device;

        this.state = {
            bitrateSlider: this.props.bitrate / 1000,
            bitrate: this.props.bitrate / 1000,
            h264Switch: this.props.gop > 0,
            vbrSwitch: this.props.mode == 2
        };

        this.timeout = null;
        
        this.bitrateText = createRef();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSliderChange = this.handleSliderChange.bind(this);
        this.updateDeviceState = this.updateDeviceState.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = (target.type === 'checkbox') ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
        if (name === 'h264Switch') {
            if (value) {
                this.state.vbrSwitch = !value;
            }
        } else if (name === 'vbrSwitch') {
            if (value) {
                this.state.h264Switch = !value;
            }
        }
        this.timeout && clearTimeout(this.timeout);
        // Note: This delay results in the proper value being sent
        this.timeout = setTimeout(() => {
            this.updateDeviceState();
        }, 200);
    }

    handleSliderChange(e, newValue) {
        this.timeout && clearTimeout(this.timeout);
        this.bitrateText.current.innerText = `Bitrate: ${newValue} Mbps`;
        this.timeout = setTimeout(() => {
            this.state.bitrate = newValue;
            this.updateDeviceState();
        }, 200);
    }

    updateDeviceState() {
        var deviceState = {
            device: this.device, 
            options: {
                GOP: this.state.h264Switch ? 29 : 0, 
                MODE: this.state.vbrSwitch ? 2 : 1, 
                BITRATE: this.state.bitrate * 1000
            }
        };
        console.log(deviceState);
        this.props.onUpdate(deviceState);
    }

    render() {
        return (
            <>
                <SupportingText>
                    <span ref={this.bitrateText}>Bitrate: { this.state.bitrateSlider } Mbps</span>
                    <Slider defaultValue={ this.state.bitrateSlider } disabled={ this.state.vbrSwitch } onChange={ this.handleSliderChange } name="bitrateSlider" style={{marginLeft: '20px', width: 'calc(100% - 25px)'}} size="small"  max={15} step={0.1} />
                </SupportingText>
                <FormGroup>
                    <DeviceSwitch checked={ this.state.h264Switch } name="h264Switch" onChange={ this.handleInputChange } text="H.264" />
                    <DeviceSwitch checked={ this.state.vbrSwitch } name="vbrSwitch" onChange={ this.handleInputChange } text="VBR (Variable Bitrate)" />
                </FormGroup>
            </>
        );
    }
}

export default class DeviceCard extends React.Component {
    constructor(props) {
        super(props);

        this.handleStateChange = this.handleStateChange.bind(this);
    }
    
    handleStateChange(deviceState) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/option', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(deviceState));
    }

    render() {
        return (
            <Grid item xs={3} style={{ paddingTop: '30px' }}>
                <Card sx={{ minWidth: 512, boxShadow: 3 }}>
                    <CardHeader 
                        action={
                            <IconButton>
                                <Settings />
                            </IconButton>
                        } 
                        title="exploreHD" />
                    <CardContent>
                        <SupportingText>Device: { this.props.device }</SupportingText>
                        <DeviceOptions device={ this.props.device } bitrate={ this.props.bitrate } gop={ this.props.gop } mode={ this.props.mode } onUpdate={ this.handleStateChange } />
                        { this.props.children }
                    </CardContent>
                </Card>
            </Grid>
        )
    }
}
