import React from "react";

import { Button, AppBar, Toolbar, Typography, IconButton, Drawer } from '@mui/material';
import { Menu } from '@mui/icons-material';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppBar position="sticky">
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
