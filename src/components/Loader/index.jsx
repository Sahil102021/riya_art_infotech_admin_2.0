import React from "react";
import { Box, CircularProgress } from "@mui/material";

const Loader = () => (
  <Box
    sx={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      bgcolor: "rgba(255, 255, 255, 0.6)",
      zIndex: 9999,
    }}
  >
    <CircularProgress size={60} />
  </Box>
);

export default Loader;
