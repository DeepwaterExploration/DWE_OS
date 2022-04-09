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
import React, { useEffect, useState } from "react";
import { makePostRequest, useDidMountEffect } from "../utils/utils";

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

const DeviceOptions = (props) => {
    const device = props.device.devicePath;

    const [bitrate, setBitrate] = useState(10);
    const [h264, setH264] = useState(true);
    const [vbr, setVBR] = useState(false);

    useDidMountEffect(() => {
        const body = {
            devicePath: device,
            options: {
                bitrate, h264, vbr
            }
        };
        makePostRequest('/options', body);
    }, [bitrate, h264, vbr]);

    return (
        <>
            <SupportingText>
                <span>Bitrate: { bitrate } Mbps</span>
                <Slider defaultValue={ bitrate } disabled={ vbr } onChange={(e) => { setBitrate(e.target.value) }} name="bitrate" 
                        style={{marginLeft: '20px', width: 'calc(100% - 25px)'}} size="small" max={15} min={0.1} step={0.1} />
            </SupportingText>
            <FormGroup>
                <DeviceSwitch checked={ h264 } name="h264Switch" onChange={(e) => {
                    setH264(e.target.checked);
                    setVBR(e.target.checked ? false : vbr);
                }} text="H.264" />
                <DeviceSwitch checked={ vbr } name="vbrSwitch" onChange={(e) => {
                    setVBR(e.target.checked);
                    setH264(e.target.checked ? false : h264);
                }} text="VBR (Variable Bitrate)" />
            </FormGroup>
        </>
    )
}

const LineBreak = () => {
    return <br></br>;
}

const StreamOptions = (props) => {
    const device = props.device.devicePath;

    const [udp, setUDP] = useState(false);
    const [hostAddress, setHostAddress] = useState('192.168.2.1');
    const [port, setPort] = useState(5600);

    const restartStream = () => {
        makePostRequest('/restartStream', {
            devicePath: device,
            stream: {
                hostAddress, port
            }
        });
    }

    useDidMountEffect(() => {
        if (udp) {
            makePostRequest('/addStream', {
                devicePath: device,
                stream: {
                    hostAddress, port
                }
            });
        } else {
            makePostRequest('/removeStream', {
                devicePath: device
            });
        }
    }, [udp]);

    return (
        <FormGroup>
            <DeviceSwitch onChange={(e) => { setUDP(e.target.checked) }} checked={ udp } name="streamSwitch" text="UDP Stream" />
            <LineBreak />
            {
                udp ? 
                <>
                    <TextField label="address" onChange={(e) => { setHostAddress(e.target.value) }} variant="standard" defaultValue={ hostAddress } />
                    <TextField label="port" onChange={(e) => { setPort(e.target.value) }} variant="standard" type="number" defaultValue={ port } />
                    <Button color="grey" variant="contained" style={{ marginTop: '20px' }} onClick={ restartStream }>Restart Stream</Button>
                </>
                : undefined
            }
        </FormGroup>
    )
}

const DeviceCard = (props) => {
    let deviceOptions;
    let deviceWarning;
    if (props.device.caps.driver) {
        deviceOptions = <DeviceOptions device={ props.device } />;
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
                    title={ props.device.info.name } subheader={
                        <>
                            { props.device.info.manufacturer ? `Manufacturer: ${ props.device.info.manufacturer }` : undefined }
                            <LineBreak />
                            { props.device.info.model ? `Model: ${ props.device.info.model }` : undefined }
                        </>
                    } />
                <CardContent>
                    <SupportingText>Device: { props.device.devicePath }</SupportingText>
                    { deviceOptions }
                    <StreamOptions device={ props.device } />
                    { props.children }
                </CardContent>
            </Card>
        </Grid>
    )
}

export default DeviceCard;
