import { Settings } from "@mui/icons-material";
import { Card, CardContent, CardHeader, FormControlLabel, FormGroup, Grid, IconButton, Slider, Switch, Typography } from "@mui/material";
import React, { createRef } from "react";

function SupportingText(props) {
    return (
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom marginBottom='14px'>
            { props.children }
        </Typography>
    )
}

function DeviceSwitch(props) {
    return (
        <FormControlLabel onChange={ props.onChange } sx={{mt: '-10px'}} control={ <Switch /> } label={ 
            <Typography color="text.secondary">{ props.text }</Typography>
        } />
    )
}

class DeviceOptions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bitrate: 0,
            isH264: false,
            isVbr: false
        };
        this.bitrateText = createRef();

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        if (name === 'bitrate-slider') {
            this.bitrateText.current.innerText = `Bitrate: ${value} Mbps`;
        } else if (name === 'vbr-switch') {
            
        }
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <>
                <SupportingText>
                    <span ref={this.bitrateText}>Bitrate: 0 Mbps</span>
                    <Slider name="bitrate-slider" onChange={ this.handleInputChange } style={{marginLeft: '20px', width: 'calc(100% - 25px)'}} size="small"  max={15} step={0.1} />
                </SupportingText>
                <FormGroup>
                    <DeviceSwitch name="h264-switch" onChange={ this.handleInputChange } text="H.264" />
                    <DeviceSwitch name="vbr-switch" onChange={ this.handleInputChange } text="VBR (Variable Bitrate)" />
                </FormGroup>
            </>
        );
    }
}

export default function DeviceCard(props) {
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
                    <SupportingText>Device: { props.device }</SupportingText>
                    <DeviceOptions />
                    { props.children }
                </CardContent>
            </Card>
        </Grid>
    )
}
