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

function DeviceOptions(props) {
    var bitrateText = createRef();
    return (
        <>
            <SupportingText>
                <span ref={bitrateText}>Bitrate: 0 Mbps</span>
                <Slider onChange={
                    (e, value) => {
                        bitrateText.current.innerText = `Bitrate: ${value} Mbps`;
                    }
                } style={{marginLeft: '20px', width: 'calc(100% - 25px)'}} size="small"  max={15} step={0.1} />
            </SupportingText>
            <FormGroup>
                <FormControlLabel sx={{mt: '-10px'}} control={ <Switch /> } label={ 
                    <Typography color="text.secondary">H.264</Typography>
                } />
                <FormControlLabel sx={{mt: '-10px'}} control={ <Switch /> } label={
                    <Typography color="text.secondary">VBR (Variable Bitrate)</Typography>
                } />
            </FormGroup>
        </>
    );
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
