import * as React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined'
import BiotechOutlinedIcon from '@mui/icons-material/BiotechOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import SignalWifi0BarOutlinedIcon from '@mui/icons-material/SignalWifi0BarOutlined'
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined'

export const mainListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Devices
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <VideoCameraBackOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Video" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BiotechOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Sensor" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <SettingsOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Misc" />
    </ListItemButton>
  </React.Fragment>
)

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Communications
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <SignalWifi0BarOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Wi-Fi" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <StorageOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Wired" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <StorageOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Interface" />
    </ListItemButton>
  </React.Fragment>
)
