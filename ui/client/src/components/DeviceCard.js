import Warning from "@mui/icons-material/Warning";
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
        } />
    )
}

class DeviceOptions extends React.Component {
    constructor(props) {
        super(props);

        this.device = props.device;

        this.state = {
            bitrate: this.props.bitrate / 1000000,
            h264Switch: this.props.gop > 0,
            vbrSwitch: this.props.mode == 2
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

    updateDeviceState() {
        var deviceState = {
            device: this.device, 
            options: {
                GOP: this.state.h264Switch ? 29 : 0, 
                MODE: this.state.vbrSwitch ? 2 : 1, 
                BITRATE: this.state.bitrate * 1000000
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
            deviceOptions = <DeviceOptions device={ this.props.device.device } 
                                           bitrate={ this.props.device.options.BITRATE } 
                                           gop={ this.props.device.options.GOP } 
                                           mode={ this.props.device.options.MODE } 
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
                        title={ this.props.device.cam_info.name } subheader={
                            <>
                                <div>
                                    { this.props.device.cam_info.manufacturer ? `Manufacturer: ${ this.props.device.cam_info.manufacturer }` : undefined }
                                </div>
                                <div>
                                    { this.props.device.cam_info.model ? `Model: ${ this.props.device.cam_info.model }` : undefined }
                                </div>
                            </>
                        } />
                    <CardContent>
                        <SupportingText>Device: { this.props.device.device }</SupportingText>
                        { deviceOptions }
                        { this.props.children }
                    </CardContent>
                </Card>
            </Grid>
        )
    }
}
