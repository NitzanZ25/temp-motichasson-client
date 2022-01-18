import * as React from "react";
import "./topbar.css";
import {
  Button,
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import icon from "../../motichasson.png";

export default function TopBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar variant="dense">
          <IconButton
            className="MotiLogo"
            children={<img src={icon} className="MotiLogo"></img>}
          ></IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Moti Chasson
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
