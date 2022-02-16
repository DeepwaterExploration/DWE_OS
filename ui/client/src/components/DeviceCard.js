import { ConstructionOutlined, Settings } from "@mui/icons-material";
import { Card, CardContent, CardHeader, FormControlLabel, FormGroup, Grid, IconButton, Slider, Switch, Typography } from "@mui/material";
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

        this.state = {
            bitrateSlider: 0,
            h264Switch: false,
            vbrSwitch: false
        };
        
        this.bitrateText = createRef();
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = (target.type === 'checkbox') ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
        if (name === 'bitrateSlider') {
            this.bitrateText.current.innerText = `Bitrate: ${value} Mbps`;
        } else if (name === 'h264Switch') {
            if (value) {
                this.state.vbrSwitch = !value;
            }
        } else if (name === 'vbrSwitch') {
            if (value) {
                this.state.h264Switch = !value;
            }
        }
        
        var options = [
            { option: '--xuset-gop', value: !this.state.h264Switch ? '28' : '0' }, 
            { option: '--xuset-cvm', value: !this.state.vbrSwitch ? '2' : '1' }, 
            { option: '--xuset-br', value: (this.state.bitrateSlider * 1000).toString() }, 
        ];
        this.props.onUpdate(options);
    }

    render() {
        return (
            <>
                <SupportingText>
                    <span ref={this.bitrateText}>Bitrate: 0 Mbps</span>
                    <Slider disabled={ this.state.vbrSwitch } name="bitrateSlider" onChange={ this.handleInputChange } style={{marginLeft: '20px', width: 'calc(100% - 25px)'}} size="small"  max={15} step={0.1} />
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
    
    handleStateChange(options) {
        for (let option of options) {
            console.log(option);
        }
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
                        <DeviceOptions onUpdate={ this.handleStateChange } />
                        { this.props.children }
                    </CardContent>
                </Card>
            </Grid>
        )
    }
}
