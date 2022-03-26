import Warning from "@mui/icons-material/Warning";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Slider from "@mui/material/Slider";
import Switch from "@mui/material/Switch";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
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
        <FormControlLabel onChange={ props.onChange } sx={{mt: '-10px'}} control={ <Switch name={ props.name } checked={props.checked} /> } label={ 
            <Typography color="text.secondary">{ props.text }</Typography>
        } >{ props.children }</FormControlLabel>
    )
}

class DeviceOptions extends React.Component {
    constructor(props) {
        super(props);

        this.device = props.device;

        this.state = {
            bitrate: this.props.bitrate / 1000000,
            h264Switch: this.props.gop > 0,
            vbrSwitch: this.props.mode == 2, 
            streamSwitch: this.props.streaming, 
            hostAddress: this.props.hostAddress, 
            hostAddressInput: null
        };

        this.timeout = null;
        
        this.bitrateText = createRef();
        this.handleInputChange = this.handleInputChange.bind(this);
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
                this.setState({ vbrSwitch: !value });
            }
        } else if (name === 'vbrSwitch') {
            if (value) {
                this.setState({ h264Switch: !value });
            }
        }
        this.timeout && clearTimeout(this.timeout);
        // Note: This delay results in the proper value being sent
        this.timeout = setTimeout(() => {
            this.updateDeviceState();
        }, 200);
    }

    updateDeviceState(restartStream=false) {
        var deviceState = {
            device: this.device, 
            options: {
                gop: this.state.h264Switch ? 29 : 0, 
                cvm: this.state.vbrSwitch ? 2 : 1, 
                bitrate: this.state.bitrate * 1000000, 
                streaming: this.state.streamSwitch, 
                hostAddress: this.state.hostAddress,
                restartStream
            }
        };
        console.log(deviceState);
        this.props.onUpdate(deviceState);
    }

    render() {
        return (
            <>
                <SupportingText>
                    <span>Bitrate: { this.state.bitrate } Mbps</span>
                    <Slider defaultValue={ this.state.bitrate } disabled={ this.state.vbrSwitch } onChange={ this.handleInputChange } name="bitrate" style={{marginLeft: '20px', width: 'calc(100% - 25px)'}} size="small"  max={15} step={0.1} />
                </SupportingText>
                <FormGroup>
                    <DeviceSwitch checked={ this.state.h264Switch } name="h264Switch" onChange={ this.handleInputChange } text="H.264" />
                    <DeviceSwitch checked={ this.state.vbrSwitch } name="vbrSwitch" onChange={ this.handleInputChange } text="VBR (Variable Bitrate)" />
                    <div>
                        <DeviceSwitch checked={ this.state.streamSwitch } name="streamSwitch" onChange={ this.handleInputChange } text="Streaming" />
                        <br></br>
                        <TextField onChange={(event) => { this.setState({ 'hostAddress': event.target.value }) }} variant="standard" defaultValue={ this.state.hostAddress } />
                        <br></br>
                        <Button color="grey" variant="contained" style={{ marginTop: '20px' }} onClick={ this.updateDeviceState.bind(this, true) }>Restart Stream</Button>
                    </div>
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
        let deviceOptions;
        let deviceWarning;
        if (this.props.device.driverCompatible) {
            deviceOptions = <DeviceOptions device={ this.props.device.cam.device } 
                                           bitrate={ this.props.device.options.bitrate } 
                                           gop={ this.props.device.options.gop } 
                                           mode={ this.props.device.options.cvm } 
                                           streaming={ this.props.device.options.streaming }
                                           hostAddress={ this.props.device.options.hostAddress }
                                           onUpdate={ this.handleStateChange } />;
            deviceWarning = null;
        } else {
            deviceOptions = null;
            deviceWarning = (
                <Tooltip title="This device is incompatible with the DWE Driver UI">
                    <Icon>
                        <Warning />
                    </Icon>
                </Tooltip>
            )
        }

        return (
            <Grid item xs={3} style={{ paddingTop: '30px' }}>
                <Card sx={{ minWidth: 512, boxShadow: 3 }}>
                    <CardHeader 
                        action={ deviceWarning } 
                        title={ this.props.device.cam.info.name } subheader={
                            <>
                                <div>
                                    { this.props.device.cam.info.manufacturer ? `Manufacturer: ${ this.props.device.cam.info.manufacturer }` : undefined }
                                </div>
                                <div>
                                    { this.props.device.cam.info.model ? `Model: ${ this.props.device.cam.info.model }` : undefined }
                                </div>
                            </>
                        } />
                    <CardContent>
                        <SupportingText>Device: { this.props.device.cam.device }</SupportingText>
                        { deviceOptions }
                        { this.props.children }
                    </CardContent>
                </Card>
            </Grid>
        )
    }
}
