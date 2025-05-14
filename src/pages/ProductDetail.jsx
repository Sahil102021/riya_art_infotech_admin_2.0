import React, { useEffect } from "react";
import MainDrawer from "../MainPage/MainDrawer";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import BasicModalAddForm from "../components/BasicModalAddForm/BasicModalAddForm";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../Reducers/productSlice";
import { productDataGet } from "../actions/products";
import { productDataList } from "../coansta/consta";

const ProductDetail = () => {
  const productData = useSelector((state) => state.product.productDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const data = await productDataGet();
      dispatch(setProducts(data));
    };
    getData();
  }, [dispatch]);

  return (
    <MainDrawer>
      {/* Header Section */}
      <section>
        <Box
          className="dashbord-padding-page"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>Product Detail Page</Box>
          <Box>
            <BasicModalAddForm />
          </Box>
        </Box>
        <Divider />
      </section>

      {/* Summary Section */}
      <section style={{ height: "200px" }}>
        <Box className="dashbord-padding-page">
          Total products: {productData?.data?.length || 0}
        </Box>
      </section>

      {/* Search Bar */}
      <section>
        <Divider />
        <Box className="dashbord-padding-page">
          <Box
            sx={{ display: "flex", maxWidth: "200px", alignItems: "center" }}
          >
            <input
              type="text"
              placeholder="Search"
              className="font-primary font-size-xs"
              style={{ border: "none", outline: "0", flex: 1 }}
            />
            <IconButton size="small">
              <SearchIcon />
            </IconButton>
          </Box>
        </Box>
        <Divider />
      </section>

      {/* Product Table */}
      <section>
        <Box className="dashbord-padding-page">
          <TableContainer>
            <Table sx={{ minWidth: 1200 }} aria-label="product table">
              <TableHead>
                <TableRow>
                  {productDataList.map((el, i) => {
                    return <TableCell>{el.name}</TableCell>;
                  })}
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {productData?.data?.map((product, i) => (
                  <TableRow key={i}>
                    <TableCell sx={{ padding: "2.5px" }}>{i}</TableCell>
                    <TableCell sx={{ padding: "2.5px" }}>
                      {product._id}
                    </TableCell>
                    <TableCell sx={{ padding: "2.5px" }}>
                      {product.title}
                    </TableCell>
                    <TableCell sx={{ padding: "2.5px" }}>
                      {product.subtitle}
                    </TableCell>
                    <TableCell sx={{ padding: "2.5px" }}>
                      {product.discription}
                    </TableCell>
                    <TableCell sx={{ padding: "2.5px" }}>
                      {product.type}
                    </TableCell>
                    <TableCell sx={{ padding: "2.5px" }}>
                      {product.category}
                    </TableCell>
                    <TableCell sx={{ padding: "2.5px" }}>
                      <img
                        src={product.image}
                        alt={product.title}
                        width="50px"
                        height="50px"
                      />
                    </TableCell>
                    <TableCell sx={{ padding: "2.5px" }}>
                      {product.date}
                    </TableCell>
                    <TableCell sx={{ padding: "2.5px" }}>
                      {product.rating}
                    </TableCell>
                    <TableCell sx={{ padding: "2.5px" }}>
                      {product.price}
                    </TableCell>
                    <TableCell sx={{ padding: "2.5px" }}>
                      {product.programinglanguage}
                    </TableCell>
                    <TableCell sx={{ padding: "2.5px" }}>
                      {product.framework}
                    </TableCell>
                    <TableCell sx={{ padding: "2.5px" }}>
                      {product.database}
                    </TableCell>
                    <TableCell  sx={{ padding: "2.5px" }} align="center">
                      <Button variant="outlined" size="small" style={{ marginRight: 8 }}>View</Button>
                      <Button variant="outlined" size="small" style={{ marginRight: 8 }}>Update</Button>
                      <Button variant="outlined" size="small" >Delete</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </section>
    </MainDrawer>
  );
};

export default ProductDetail;
