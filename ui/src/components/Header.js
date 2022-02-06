import React from "react";

import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';

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
