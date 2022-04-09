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
        this.options = this.device.options;

        this.state = {
            bitrate: this.options.driver.bitrate,
            h264Switch: this.options.driver.gop > 0,
            vbrSwitch: this.options.driver.cvm == 2,
            streamSwitch: this.options.streaming.udp,
            hostAddress: this.options.streaming.hostAddress,
            port: '',
            hostAddressInput: null
        };

        this.updatePort();

        this.timeout = null;
        
        this.bitrateText = createRef();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.updateDeviceState = this.updateDeviceState.bind(this);
    }

    updatePort() {
        fetch('/streams')
        .then((response) => response.json())
        .then((result) => {
            let stream = result.streams.find((stream) => (stream.device == this.device.devicePath));
            console.log(stream);
            if (stream) {
                this.setState({ port: stream.port })
            }
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = (target.type === 'checkbox') ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
        if (name === 'streamSwitch') {
            setTimeout(() => this.updatePort(), 500);
        }
        else if (name === 'h264Switch') {
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
            devicePath: this.device.devicePath, 
            options: {
                gop: this.state.h264Switch ? 29 : 0, 
                cvm: this.state.vbrSwitch ? 2 : 1, 
                bitrate: this.state.bitrate, 
                udp: this.state.streamSwitch, 
                hostAddress: this.state.hostAddress,
                restartStream
            }
        };
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
                        <DeviceSwitch checked={ this.state.streamSwitch } name="streamSwitch" onChange={ this.handleInputChange } text="UDP Stream" />
                        {
                            this.state.streamSwitch ? 
                            <>
                                <br></br>
                                <TextField label="address" onChange={(event) => { this.setState({ 'hostAddress': event.target.value }) }} variant="standard" defaultValue={ this.state.hostAddress } />
                                {/* <br></br> */}
                                <TextField label="port" variant="standard" type="number" value={ this.state.port } />
                            </>
                            : undefined
                        }
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
        if (this.props.device.caps.driver) {
            deviceOptions = <DeviceOptions device={ this.props.device }
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
                        title={ this.props.device.info.name } subheader={
                            <>
                                <div>
                                    { this.props.device.info.manufacturer ? `Manufacturer: ${ this.props.device.info.manufacturer }` : undefined }
                                </div>
                                <div>
                                    { this.props.device.info.model ? `Model: ${ this.props.device.info.model }` : undefined }
                                </div>
                            </>
                        } />
                    <CardContent>
                        <SupportingText>Device: { this.props.device.devicePath }</SupportingText>
                        { deviceOptions }
                        { this.props.children }
                    </CardContent>
                </Card>
            </Grid>
        )
    }
}
