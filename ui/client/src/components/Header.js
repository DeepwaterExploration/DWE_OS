import React from "react";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/icons-material/Menu';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppBar position="fixed" style={{ overflow: 'hidden' }}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        exploreHD Driver Config
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}
