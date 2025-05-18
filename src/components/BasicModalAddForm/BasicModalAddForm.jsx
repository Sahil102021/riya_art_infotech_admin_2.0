import * as React from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  Divider,
  Grid,
  TextField,
  IconButton,
} from "@mui/material";
import { useFormik } from "formik";
import CancelIcon from "@mui/icons-material/Cancel";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { ProductDetailCreate, ProductDetailUpdate } from "../../actions/products";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: 800,
  bgcolor: "background.paper",
  borderRadius: "5px",
  p: 4,
};

const imageFormats = ["image/png", "image/svg+xml", "image/jpeg", "image/jpg", "image/webp"];

export default function BasicModalAddForm({
  buttonName,
  type,
  name,
  variant,
  size,
  sx,
  editData = null,
  mode = "add",
}) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formik = useFormik({
    initialValues: editData || {
      title: "",
      subtitle: "",
      description: "",
      type: "",
      date: "",
      programinglanguage: "",
      framework: "",
      database: "",
      category: "",
      price: "",
      rating: "",
      review: "",
      keyfeture: "",
      sku: "",
      images: [],
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      const uploadedImages = values.images.map((file) => file.name);
      console.log(values.images);
      const payload = {
        ...values,
        images: values.images,
      };
      console.log(editData)
      try {
        if (mode === "add") {
          await ProductDetailCreate(payload);
        } else if (mode === "update") {
          await ProductDetailUpdate(editData._id,payload);
        }
        handleClose();
      } catch (error) {
        console.error("Product submission error", error);
      }
    },
  });

  const handleImageChange = (event) => {
    const files = Array.from(event.currentTarget.files);
    const validFiles = files.filter((file) => imageFormats.includes(file.type));
    formik.setFieldValue("images", validFiles);
  };

  return (
    <div>
      <Button
        variant={variant}
        onClick={handleOpen}
        type={type}
        name={name}
        size={size}
        sx={sx}
      >
        {buttonName}
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">
              {mode === "add" ? "Add New Product" : "Update Product"}
            </Typography>
            <IconButton onClick={handleClose}>
              <CancelIcon />
            </IconButton>
          </Box>
          <Divider sx={{ mb: 2 }} />

          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              {[
                ["title", "Title"],
                ["subtitle", "Sub Title"],
                ["type", "Type"],
                ["category", "Category"],
                ["date", "Date"],
                ["rating", "Rating"],
                ["review", "Review"],
                ["price", "Price"],
                ["programinglanguage", "Programming Language"],
                ["framework", "Framework"],
                ["database", "Database"],
                ["sku", "SKU"],
                ["keyfeture", "Key Features"],
              ].map(([fieldName, label]) => (
                <Grid item size={{xs:12 , sm:6}} key={fieldName}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    label={label}
                    name={fieldName}
                    value={formik.values[fieldName] || ""}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                  />
                </Grid>
              ))}

              <Grid item size={{xs:12 , sm:6}}>
                <Button variant="outlined" component="label" fullWidth>
                  Upload Images
                  <input
                    hidden
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                  />
                </Button>
                <Typography variant="caption" color="textSecondary">
                  {formik.values.images?.length || 0} file(s) selected
                </Typography>
              </Grid>

              <Grid item size={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Product Description"
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                  variant="outlined"
                  size="small"
                />
              </Grid>
            </Grid>

            <Box
              mt={3}
              display="flex"
              justifyContent="flex-end"
              sx={mode === "view" ? { display: "none" } : {}}
            >
              <Button variant="contained" type="submit">
                {mode === "add" ? "Add Product" : "Update Product"}
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
