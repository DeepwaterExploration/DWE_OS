import React, { useState } from "react";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from "@mui/system/Box";

import DWELogo_white from '../images/DWELogo_white.svg'

export default function Header(props) {
    const [drawer, setDrawer] = useState(false);

    return (
        <AppBar position="fixed" style={{ overflow: 'hidden' }}>
            <Toolbar>
                <IconButton onClick={() => setDrawer(!drawer) } edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <Menu />
                </IconButton>
                <Drawer anchor="left" open={drawer} onClose={ () => setDrawer(!drawer) }>
                    <Box
                        sx={{ width: 300 }}
                        role="presentation"
                    >
                        <List>
                            <ListItem>
                                <Typography variant="h6" color="inherit">
                                    DWE OS Pre-Alpha
                                </Typography>
                            </ListItem>
                            <Divider />
                            { props.drawerItems }
                        </List>
                    </Box>
                </Drawer>
                <img src={DWELogo_white} style={{ height: 30 }} alt="DWE Logo"/>
                { props.children }
            </Toolbar>
        </AppBar>
    )
}
