import * as React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import SignalWifi0BarOutlinedIcon from '@mui/icons-material/SignalWifi0BarOutlined'
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined'

export const mainListItems = (
  <React.Fragment>
    <ListSubheader fontWeight="fontWeightBold" component="div" inset>
      Devices
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon
        paddingY="auto"
        paddingX="auto"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <VideoCameraBackOutlinedIcon
          paddingY="auto"
          paddingX="auto"
          display="flex"
          justifyContent="center"
          alignItems="center"
        />
      </ListItemIcon>
      <ListItemText primary="Cameras" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon
        paddingY="auto"
        paddingX="auto"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <LightbulbIcon
          paddingY="auto"
          paddingX="auto"
          display="flex"
          justifyContent="center"
          alignItems="center"
        />
      </ListItemIcon>
      <ListItemText primary="Lights" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon
        paddingY="auto"
        paddingX="auto"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <SettingsOutlinedIcon
          paddingY="auto"
          paddingX="auto"
          display="flex"
          justifyContent="center"
          alignItems="center"
        />
      </ListItemIcon>
      <ListItemText primary="Misc" />
    </ListItemButton>
  </React.Fragment>
)

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader fontWeight="fontWeightBold" component="div" inset>
      Communications
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon
        paddingY="auto"
        paddingX="auto"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <SignalWifi0BarOutlinedIcon
          paddingY="auto"
          paddingX="auto"
          display="flex"
          justifyContent="center"
          alignItems="center"
        />
      </ListItemIcon>
      <ListItemText primary="Wi-Fi" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon
        paddingY="auto"
        paddingX="auto"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <StorageOutlinedIcon
          paddingY="auto"
          paddingX="auto"
          display="flex"
          justifyContent="center"
          alignItems="center"
        />
      </ListItemIcon>
      <ListItemText primary="Wired" />
    </ListItemButton>
  </React.Fragment>
)
