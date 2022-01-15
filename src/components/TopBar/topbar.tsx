import * as React from "react";
import { Button, AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function TopBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar variant="dense">
          <Button className="TopBar"></Button>
          <Typography variant="h6" color="inherit" component="div">
            Moti Chasson
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
