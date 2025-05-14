import React from "react";
import MainDrawer from "../MainPage/MainDrawer";
import { Box, Button, Divider, IconButton, TextField } from "@mui/material";
import BasicModalAddForm from "../components/BasicModalAddForm/BasicModalAddForm";
import SearchIcon from "@mui/icons-material/Search";

const ProductDetail = () => {
  return (
    <MainDrawer>
      <section>
        <Box className="dashbord-padding-page "
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }} >
          <Box>Product Detail Page</Box>
          <Box>
            <BasicModalAddForm />
          </Box>
        </Box>
        <Divider />
      </section>
      <section style={{ height: "200px" }}>
        <Box className="dashbord-padding-page" >
          total all detail 
        </Box>
      </section>
      <section>
        <Divider />
        <Box className="dashbord-padding-page">
          <Box sx={{ display: "flex", maxWidth: "400px" }}>
            <input
              type="text"
              className="font-primary font-size-xs"
              style={{ border: "none", outline: "0" }}
              size="small"
              placeholder="Search"
            />
            <IconButton size="small">
              <SearchIcon />
            </IconButton>
            <Box className={'vertical-line'} />
          </Box>
        </Box>
        <Divider />
      </section>
    </MainDrawer>
  );
};

export default ProductDetail;
