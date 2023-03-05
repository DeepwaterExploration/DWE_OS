import * as React from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Box from '@mui/system/Box'

import DWELogo_white from '../images/DWELogo_white.svg'
import { Grid } from '@mui/material'
import WifiMenu from './WifiMenu'

export default function Header(props) {
  const [open, setOpen] = React.useState(false)
  const toggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <AppBar position="fixed" style={{ overflow: 'hidden' }}>
      <Toolbar
        sx={{
          pr: '24px', // keep right padding when drawer closed
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: '36px',
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={open} onClose={toggleDrawer}>
          <Box sx={{ width: 300 }} role="presentation">
            <List>
              <ListItem>
                <Typography variant="h6" color="inherit">
                  DWE OS Pre-Alpha
                </Typography>
              </ListItem>
              <Divider />
              {props.drawerItems}
            </List>
          </Box>
        </Drawer>
        <img src={DWELogo_white} style={{ height: 30 }} alt="DWE Logo" />
        <Grid container justifyContent="flex-end">
          <WifiMenu />
        </Grid>
        <PowerSettingsNewIcon />
        {props.children}
      </Toolbar>
    </AppBar>
  )
}
