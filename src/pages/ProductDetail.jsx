import React, { useEffect, useState } from "react";
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
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import BasicModalAddForm from "../components/BasicModalAddForm/BasicModalAddForm";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, setProducts } from "../Reducers/productSlice";
import { productDataGet } from "../actions/products";
import { productDataList } from "../coansta/consta";
import { riicon } from "../coansta/icon";

const ProductDetail = () => {
  const [fackData, setFackData] = useState({
    No: 1,
    id: "proj001",
    sku: "454sddsds",
    title: "Event Management System",
    subtitle: "Manage events efficiently",
    description:
      "A full-stack web application to manage events, attendees, and schedules with an admin panel and frontend.",
    type: "Web Application",
    category: "Business",
    image: "https://example.com/images/event-management.jpg",
    date: "2025-05-15",
    rating: 4.8,
    price: 199.99,
    programinglanguage: "JavaScript",
    framework: "React.js + Node.js",
    database: "MongoDB",
    review: "45",
  });
  const [data, setData] = useState([]);
  useEffect(() => {
    let copyData = [...data];
    copyData.push(fackData);
    copyData.push(fackData);
    copyData.push(fackData);
    copyData.push(fackData);
    copyData.push(fackData);
    copyData.push(fackData);
    copyData.push(fackData);
    copyData.push(fackData);
    copyData.push(fackData);
    copyData.push(fackData);
    copyData.push(fackData);
    copyData.push(fackData);
    copyData.push(fackData);
    setData(copyData);
  }, []);
  // const productData = useSelector((state) => state.product.productDetail);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await productDataGet();
  //     dispatch(setProducts(data));
  //   };
  //   getData();
  // }, [dispatch]);

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
            <BasicModalAddForm
              variant={"outlined"}
              buttonName="Add New Product"
            />
          </Box>
        </Box>
        <Divider />
      </section>

      {/* Summary Section */}
      <section style={{ height: "200px" }}>
       <Box
        className="dashbord-padding-page"
        display="grid"
        gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" }}
        gap={1} >
        <Typography>Total Product List: {data.length}</Typography>
        <Typography>Category: Business</Typography>
        <Typography>Images: Hosted</Typography>
        <Typography>Database: MongoDB</Typography>
        <Typography>Type: Web Application</Typography>
        <Typography>Programming Language: JavaScript</Typography>
      </Box>
      </section>

      {/* Search Bar */}
      <section>
        <Divider />
        <Box className="dashbord-padding-page">
          <Box
            sx={{
              display: "flex",
              maxWidth: "300px",
              alignItems: "center",
              flexDirection: "row",
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
            <Box className="vertical-line" />
          </Box>
        </Box>
        <Divider />
      </section>

      {/* Product Table */}
      <section>
        <Box className="dashbord-padding-page" sx={{ overflow: "hidden" }}>
      <Box sx={{ width: "100%", overflowX: "auto" }}>
        <TableContainer sx={{  maxHeight: 570, width:{xs:"480px", sm:"574px" , md:"767px" , lg:"100%"} }}>
          <Table stickyHeader aria-label="responsive product table">
            <TableHead>
              <TableRow>
                {productDataList.map((el, i) => (
                  <TableCell
                    key={i}
                    align="center"
                    className="tablecell-custome"
                    sx={{ px: 1, fontWeight: 600 }}
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
              {data.map((product, i) => (
                <TableRow key={i} hover>
                  <TableCell className="tablecell-custome" align="center">
                    <Typography className="line-clamp-2">{i + 1}</Typography>
                  </TableCell>
                  <TableCell className="tablecell-custome" align="center">
                    <Typography className="line-clamp-2">{product.title}</Typography>
                  </TableCell>
                  <TableCell className="tablecell-custome" align="center">
                    <Typography className="line-clamp-2">{product.subtitle}</Typography>
                  </TableCell>
                  <TableCell className="tablecell-custome" align="center">
                    <Typography className="line-clamp-2">{product.description}</Typography>
                  </TableCell>
                  <TableCell className="tablecell-custome" align="center">
                    <Typography className="line-clamp-2">{product.type}</Typography>
                  </TableCell>
                  <TableCell className="tablecell-custome" align="center">
                    <Typography className="line-clamp-2">{product.category}</Typography>
                  </TableCell>
                  <TableCell className="tablecell-custome" align="center">
                    <img
                      src={product.image}
                      alt={product.title}
                      width="50"
                      height="50"
                      style={{ objectFit: "cover", borderRadius: 4 }}
                    />
                  </TableCell>
                  <TableCell className="tablecell-custome" align="center">
                    <Typography className="line-clamp-2">{product.price}</Typography>
                  </TableCell>
                  <TableCell className="tablecell-custome" align="center">
                    <Typography className="line-clamp-2">{product.programinglanguage}</Typography>
                  </TableCell>
                  <TableCell className="tablecell-custome" align="center">
                    <Typography className="line-clamp-2">{product.framework}</Typography>
                  </TableCell>
                  <TableCell className="tablecell-custome" align="center">
                    <Typography className="line-clamp-2">{product.database}</Typography>
                  </TableCell>
                  <TableCell className="tablecell-custome" align="center">
                    <Box sx={{ display: "flex", gap: 1, justifyContent: "center" , flexDirection:'row' }}>
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
