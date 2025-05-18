import React, { useEffect } from "react";
import MainDrawer from "../MainPage/MainDrawer";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import BasicModalAddForm from "../components/BasicModalAddForm/BasicModalAddForm";
import { productDataList } from "../coansta/consta";
import { riicon } from "../coansta/icon";
import { productDataGet } from "../actions/products";
import { setProducts } from "../Reducers/productSlice";

const ProductDetail = () => {
  const productData = useSelector((state) => state.product.productDetail);
  const dispatch = useDispatch();

  console.log("productData = ", productData.data)

  useEffect(() => {
    const getData = async () => {
      const data = await productDataGet();
      dispatch(setProducts(data));
    };
    getData();
  }, [dispatch]);

  return (
    <MainDrawer>
      {/* Header */}
      <section>
        <Box
          className="dashbord-padding-page"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Product Detail Page</Typography>
          <BasicModalAddForm variant="outlined" buttonName="Add New Product" />
        </Box>
        <Divider />
      </section>

      {/* Summary */}
      <section style={{ height: "200px" }}>
        <Box
          className="dashbord-padding-page"
          display="grid"
          gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" }}
          gap={1}
        >
          <Typography>Total Product List: {productData?.length}</Typography>
          <Typography>Category: Business</Typography>
          <Typography>Images: Hosted</Typography>
          <Typography>Database: MongoDB</Typography>
          <Typography>Type: Web Application</Typography>
          <Typography>Programming Language: JavaScript</Typography>
        </Box>
      </section>

      {/* Search */}
      <section>
        <Divider />
        <Box className="dashbord-padding-page">
          <Box
            sx={{
              display: "flex",
              maxWidth: "300px",
              alignItems: "center",
            }}
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
        <Box className="dashbord-padding-page" sx={{ overflow: "hidden" }}>
          <Box sx={{ width: "100%", overflowX: "auto" }}>
            <TableContainer
              sx={{
                maxHeight: 570,
                width: { xs: "480px", sm: "574px", md: "767px", lg: "100%" },
              }}
            >
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    {productDataList.map((el, i) => (
                      <TableCell
                        key={i}
                        align="center"
                        sx={{ px: 1, fontWeight: 600 }}
                        className="tablecell-custome"
                      >
                        {el.name}
                      </TableCell>
                    ))}
                    <TableCell align="center" sx={{ px: 1, fontWeight: 600 }}>
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {productData?.data?.map((product, i) => (
                    <TableRow key={i} hover>
                      <TableCell align="center">{i + 1}</TableCell>
                      <TableCell align="center">{product.title}</TableCell>
                      <TableCell align="center">{product.subtitle}</TableCell>
                      <TableCell align="center">{product.description}</TableCell>
                      <TableCell align="center">{product.type}</TableCell>
                      <TableCell align="center">{product.category}</TableCell>
                      <TableCell align="center">
                        <img
                          src={product.image}
                          alt={product.title}
                          width="50"
                          height="50"
                          style={{ objectFit: "cover", borderRadius: 4 }}
                        />
                      </TableCell>
                      <TableCell align="center">{product.price}</TableCell>
                      <TableCell align="center">{product.programinglanguage}</TableCell>
                      <TableCell align="center">{product.framework}</TableCell>
                      <TableCell align="center">{product.database}</TableCell>
                      <TableCell align="center">
                        <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
                          <BasicModalAddForm
                            size="small"
                            buttonName={riicon.view}
                            editData={product}
                            mode="view"
                          />
                          <BasicModalAddForm
                            size="small"
                            buttonName={riicon.update}
                            editData={product}
                            mode="update"
                          />
                          <Button
                            size="small"
                            color="error"
                            onClick={() => dispatch(deleteProduct(product.id))}
                          >
                            {riicon.DeleteIcon}
                          </Button>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </section>
    </MainDrawer>
  );
};

export default ProductDetail;
