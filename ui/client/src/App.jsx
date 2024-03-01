import { useState, useEffect } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import ListItem from "@mui/material/ListItem";
import Switch from "@mui/material/Switch";
import ThemeProvider from "@mui/system/ThemeProvider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { lightTheme, darkTheme } from "./themes";
import { makePostRequest } from "./utils/utils";
import DevicesContainer from "./components/DevicesContainer";
import DeviceCard from "./components/DeviceCard";
import Header from "./components/Header";

import { io } from "socket.io-client";

// import packageBackend from "./package.backend.json";

const App = () => {
  const [exploreHD_cards, setExploreHD_Cards] = useState([]);
  const [other_cards, setOther_Cards] = useState([]);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme,
  );

  const socket = io();

  const addCard = (device) => {
    if (device.caps.driver) {
      setExploreHD_Cards((prevCards) => [
        ...prevCards,
        <DeviceCard key={prevCards.length} device={device} />,
      ]);
    } else {
      setOther_Cards((prevCards) => [
        ...prevCards,
        <DeviceCard key={prevCards.length} device={device} />,
      ]);
    }
  };

  const addDevices = (devices) => {
    for (let device of devices) {
      addCard(device);
    }
  };

  const removeDevice = (device) => {
    let devicePath = device.devicePath;
    if (device.caps.driver) {
      setExploreHD_Cards((prevCards) =>
        prevCards.filter((ehd) => ehd.props.device.devicePath !== devicePath),
      );
    } else {
      setOther_Cards((prevCards) =>
        prevCards.filter((dev) => dev.props.device.devicePath !== devicePath),
      );
    }
  };

  const updateTheme = (e) => {
    localStorage.setItem("theme", e.target.checked ? "dark" : "light");
    setTheme(e.target.checked ? darkTheme : lightTheme);
  };

  const resetSettings = () => {
    makePostRequest("/resetSettings", {}, () => window.location.reload());
  };

  useEffect(() => {
    fetch("/devices")
      .then((response) => response.json())
      .then((devices) => addDevices(devices));

    socket.on("added", (addedDevices) => {
      addDevices(addedDevices);
    });
    socket.on("removed", (removedDevices) => {
      for (let device of removedDevices) {
        removeDevice(device);
      }
    });

    // Clean up on component unmount
    return () => {
      socket.off("added");
      socket.off("removed");
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        drawerItems={
          <>
            <ListItem>
              <FormControlLabel
                onChange={updateTheme}
                control={<Switch checked={theme === darkTheme} name="Theme" />}
                label={
                  <Typography color="text.secondary">
                    {theme === darkTheme ? "Dark Theme" : "Light Theme"}
                  </Typography>
                }
              />
            </ListItem>
            <ListItem>
              <Button
                color="primary"
                variant="contained"
                onClick={resetSettings}
              >
                Reset Settings
              </Button>
            </ListItem>
            {/* <ListItem>
              <span>Backend Revision: {packageBackend.version}</span>
            </ListItem> */}
          </>
        }
      />
      <div style={{ minHeight: "64px" }} />
      <div style={{ overflowY: "auto", height: "calc(100vh - 64px)" }}>
        <DevicesContainer>
          {exploreHD_cards}
          {other_cards}
        </DevicesContainer>
      </div>
    </ThemeProvider>
  );
};

export default App;
