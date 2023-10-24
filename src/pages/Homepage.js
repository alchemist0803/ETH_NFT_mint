import { useEffect, useState } from "react";
import {
  Box,
  CardMedia,
  Grid,
  Input,
  Typography,
  Button,
} from "@material-ui/core";
import bg from "../assets/images/bg.png";
import title from "../assets/images/title.png";
import { Lens } from "@material-ui/icons";

import "./Homepage.scss";

const Homepage = () => {
  const [userName, setUserName] = useState("");
  const [address, setAddress] = useState("");

  const clientId = "1166407185367052399"
  const scope = "identify"
  const redirectUri = "http://localhost:3000"

  const handleMessage = (event) => {
    console.log(event)
  }

  const loginDiscord = () => {
    // const dPopup = window.open(
    //   `https://discord.com/api/oauth2/authorize?response_type=token&client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}`,
    //   "discordLogin",
    //   "height=700,width=500"
    // );
    window.open(
      `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=${scope}`,
      "_parent"
    )
    window.addEventListener("message", handleMessage, false);
  };

  return (
    <Grid container className="homepage">
      <Box className="bg">
        <CardMedia component={"img"} src={bg} alt="background" />
      </Box>
      <Grid item xs={1} sm={2} md={3} lg={4} />
      <Grid item xs={10} sm={8} md={6} lg={4} className="container">
        <CardMedia component={"img"} src={title} alt="MINT" />
        <Box className="description">
          <Typography className="first">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Typography className="second">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </Box>
        <Box className="list">
          <Box className="title">
            <Lens />
            <Typography>Join the Discord:</Typography>
          </Box>
          <Box className="buttons">
            <Button className="first" onClick={loginDiscord}>
              LOGIN WITH DISCORD
            </Button>
            <Button className="second" disabled={true}>
              VERIFY
            </Button>
          </Box>
        </Box>
        <Box className="list">
          <Box className="title">
            <Lens />
            <Typography>Get the Verification Link for Twitter:</Typography>
          </Box>
          <Box className="buttons">
            <Input
              className="input"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="@username"
            />
            <Button className="second">GENERATE</Button>
          </Box>
          <Box className="description">
            <Typography className="first">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Typography className="second">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Typography>
          </Box>
        </Box>
        <Box className="list">
          <Box className="title">
            <Lens />
            <Typography>Add your ETH address below:</Typography>
          </Box>
          <Box className="buttons">
            <Input
              className="input"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="0x71C7656EC7ab88b098defB751B7401B5f6d8..."
            />
          </Box>
        </Box>
        <Box className="list">
          <Box className="title">
            <Lens />
            <Typography>Finalize your status:</Typography>
          </Box>
          <Box className="buttons">
            <Button className="submit">SUBMIT ENTRY</Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={1} sm={2} md={3} lg={4} />
    </Grid>
  );
};

export default Homepage;
