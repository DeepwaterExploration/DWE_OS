import * as React from 'react'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import InfoIcon from '@mui/icons-material/Info'
import Divider from '@mui/material/Divider'
import MuiDrawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Box from '@mui/system/Box'
import { mainListItems, secondaryListItems } from './listItems'
import DWELogo_white from '../images/DWELogo_white.svg'
import { Grid } from '@mui/material'
import WifiMenu from './WifiMenu'
import CssBaseline from '@mui/material/CssBaseline'
import ListSubheader from '@mui/material/ListSubheader'
import Button from '@mui/material/Button'
import { lightTheme, darkTheme } from '../themes'
import DevicesContainer from './DevicesContainer'
import packageBackend from '../package.backend.json'
import Container from '@mui/material/Container'
import { makePostRequest } from '../utils/utils'
import DeviceCard from './DeviceCard'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import { io } from 'socket.io-client'

const drawerWidth = 240

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open'
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'open'
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9)
      }
    })
  }
}))

const mdTheme = createTheme()

export default function Dashboard(props) {
  const [open, setOpen] = React.useState(false)
  const [theme, setTheme] = React.useState(
    localStorage.getItem('theme') == 'dark' ? darkTheme : lightTheme
  )
  const toggleTheme = () => {
    if (theme.palette.mode == 'dark') {
      setTheme(lightTheme)
      localStorage.setItem('theme', 'light')
    } else {
      setTheme(darkTheme)
      localStorage.setItem('theme', 'dark')
    }
  }
  const [exploreHD_cards, setExploreHD_cards] = React.useState([])
  const [other_cards, setOther_cards] = React.useState([])
  const [socket, setSocket] = React.useState(io())
  console.log('socket', socket)
  const toggleDrawer = () => {
    setOpen(!open)
  }
  const addCard = device => {
    if (device.caps.driver) {
      setExploreHD_cards(
        exploreHD_cards.concat(
          <DeviceCard key={exploreHD_cards.length} device={device} />
        )
      )
    } else {
      setOther_cards(
        other_cards.concat(
          <DeviceCard key={other_cards.length} device={device} />
        )
      )
    }
  }
  const addDevices = devices => {
    for (let device of devices) {
      addCard(device)
    }
  }
  const removeDevice = device => {
    let devicePath = device.devicePath
    if (device.caps.driver) {
      setExploreHD_cards(
        exploreHD_cards.filter(card => {
          return card.props.device.devicePath != devicePath
        })
      )
    } else {
      setOther_cards(
        other_cards.filter(card => {
          return card.props.device.devicePath != devicePath
        })
      )
    }
  }

  React.useEffect(() => {
    // Add event listeners to handle device connection status updates
    socket.on('connect', () => {
      console.log('connect')
      fetch('/devices')
        .then(response => response.json())
        .then(devices => addDevices(devices))
    })
    socket.on('disconnect', () => {
      console.log('disconnect')
      fetch('/devices')
        .then(response => response.json())
        .then(devices => {
          for (let device of devices) {
            removeDevice(device)
          }
        })
    })
    socket.on('added', addedDevices => {
      console.log('added', addedDevices)
      for (let device of addedDevices) {
        addCard(device)
      }
    })
    socket.on('removed', removedDevices => {
      console.log('removed', removedDevices)
      for (let device of removedDevices) {
        removeDevice(device)
      }
    })
    // socket.on('deviceConnected', (device) => {
    //   console.log('deviceConnected', device)
    //   addCard(device)
    // })
    // socket.on('deviceDisconnected', (device) => {
    //   console.log('deviceDisconnected', device)
    //   removeDevice(device)
    // })
    // socket.on('deviceReconnected', (device) => {
    //   console.log('deviceReconnected', device)
    //   removeDevice(device)
    //   addCard(device)
    // })
    // // Get all devices
    // socket.emit('getDevices', {}, (devices) => {
    //   console.log('getDevices', devices)
    //   addDevices(devices)
    // })
    // // Get current theme
    // setTheme(localStorage.getItem('theme') == 'dark' ? darkTheme : lightTheme)
  }, [])

  const updateTheme = e => {
    localStorage.setItem('theme', e.target.checked ? 'dark' : 'light')
    setTheme(e.target.checked ? darkTheme : lightTheme)
    // this.setState({
    //   theme: this.state.theme == lightTheme ? darkTheme : lightTheme,
    // })
  }
  const resetSettings = () => {
    makePostRequest('/resetSettings', {}, () => window.location.reload())
    // makePostRequest('resetSettings', {})
    // this.refreshCards()
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px' // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' })
              }}
            >
              <MenuIcon />
            </IconButton>
            <img src={DWELogo_white} style={{ height: 30 }} alt="DWE Logo" />
            {/* <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              DriverUI
            </Typography>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Stereo
            </Typography>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              ML/AI
            </Typography> */}
            <Grid container justifyContent="flex-end">
              <WifiMenu />
            </Grid>
            <PowerSettingsNewIcon />
            {props.children}
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1]
            }}
          >
            <ListItemText
              style={{
                textAlign: 'center',
                padding: 'auto'
              }}
              primary={'DWE OS Pre-Alpha'}
              secondary={'Version: ' + packageBackend.version}
            />
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
            <Divider sx={{ my: 1 }} />
            <React.Fragment>
              <ListSubheader fontWeight="fontWeightBold" component="div" inset>
                Options
              </ListSubheader>
              <ListItemButton onClick={toggleTheme}>
                <ListItemIcon
                  paddingY="auto"
                  paddingX="auto"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  {theme.palette.mode === 'dark' ? (
                    <Brightness7Icon />
                  ) : (
                    <Brightness4Icon />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={
                    theme.palette.mode === 'dark' ? 'Light Theme' : 'Dark Theme'
                  }
                />
              </ListItemButton>
              <ListItemButton onClick={resetSettings}>
                <ListItemIcon
                  paddingY="auto"
                  paddingX="auto"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <RestartAltIcon
                    paddingY="auto"
                    paddingX="auto"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  />
                </ListItemIcon>
                <ListItemText primary="Reset Settings" />
              </ListItemButton>
            </React.Fragment>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: theme =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto'
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* DeviceCards */}
              <div style={{ minHeight: '64px' }} />
              <div style={{ overflowY: 'auto', height: 'calc(100vh - 64px)' }}>
                <DevicesContainer>
                  {exploreHD_cards}
                  {other_cards}
                </DevicesContainer>
              </div>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
