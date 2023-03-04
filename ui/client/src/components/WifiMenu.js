import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import WifiIcon from '@mui/icons-material/Wifi';
import WifiLockIcon from '@mui/icons-material/WifiLock';
import SignalWifi4Bar from '@mui/icons-material/SignalWifi4Bar';
import { useState } from 'react';
import { Button, Grid, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { LineBreak } from '../utils/utils';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

function WifiConnection(props) {
    let Icon = SignalWifi4Bar;
    if (props.locked) {
        Icon = WifiLockIcon;
    }
    return (
        <IconButton>
            <Icon sx={{ marginRight: 1 }} />
            {props.ssid}
        </IconButton>
    )
}

export default function WifiMenu(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [wifiModalOpen, setWifiModalOpen] = useState(false);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton id="wifi-menu-button" aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <WifiIcon />
            </IconButton>
            <Menu id="wifi-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'wifi-menu-button',
                }}>
                <MenuItem onClick={function() { setWifiModalOpen(true); handleClose(); }}>
                    <WifiConnection locked={true} ssid="Wifi 1" />
                </MenuItem>
                <MenuItem onClick={function() { setWifiModalOpen(true); handleClose(); }}>
                    <WifiConnection locked={true} ssid="Wifi 2" />
                </MenuItem>
                <MenuItem onClick={function() { setWifiModalOpen(true); handleClose(); }}>
                    <WifiConnection locked={false} ssid="Wifi 3" />
                </MenuItem>
            </Menu>
            <Modal
                open={wifiModalOpen}
                onClose={() => { setWifiModalOpen(false) }}
            >
                <Box sx={modalStyle}>
                    <Typography variant="h6" component="h2">
                        Enter a password for the network: "Wifi 1"
                    </Typography>
                    <TextField type="password" label="Password" variant="standard" />
                    <LineBreak />
                    <Grid sx={{marginTop: 1}} container alignItems="center" justifyContent="center">
                        <Button sx={{width: '40%', margin: 1}} variant="contained">Cancel</Button>
                        <Button sx={{width: '40%', margin: 1}} variant="contained">Connect</Button>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}