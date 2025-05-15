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
import { addProduct, updateProduct } from "../../Reducers/productSlice";

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

const imageFormats = ["image/png", "image/svg+xml", "image/jpeg"];

export default function BasicModalAddForm({
  buttonName,
  type,
  id,
  name,
  variant,
  size,
  sx,
  editData = null,
  mode = "add",
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: editData || {
      id: "",
      title: "",
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
      keyFeture: "",
      sku: "",
      imges: [],
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(alert(JSON.stringify(values)));
      if (mode === "add") {
        dispatch(addProduct(values));
      } else if (mode === "update") {
        dispatch(updateProduct(values));
      }
      handleClose();
    },
  });

  const handleImageChange = (event) => {
    const files = Array.from(event.currentTarget.files);
    const validFiles = files.filter((file) => imageFormats.includes(file.type));
    formik.setFieldValue("imges", validFiles);
  };
// console.log(editData);
  return (
    <div>
      <Button
        variant={variant}
        onClick={handleOpen}
        type={type}
        id={id}
        name={name}
        size={size}
        sx={sx} >
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
            <Typography variant="h6" gutterBottom>
              {mode === "add" ? "Add New Product" : "Update Product"}
            </Typography>
            <IconButton aria-label="Cancel" onClick={handleClose}>
              <CancelIcon />
            </IconButton>
          </Box>
          <Divider sx={{ mb: 2 }} />
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              {[
                ["id", "ID"],
                ["title", "Title"],
                ["price", "Price"],
                ["type", "Type"],
                ["category", "Category"],
                ["date", "Date"],
                ["programinglanguage", "Programing Language"],
                ["framework", "Framework"],
                ["database", "Database"],
                ["rating", "Rating"],
                ["review", "Review"],
                ["keyFeture", "Key Feature"],
                ["sku", "SKU"],
              ].map(([name, label]) => (
                <Grid item size={{ xs: 12, sm: 6 }} key={name}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label={label}
                    name={name}
                    value={formik.values[name]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                    size="small"
                  />
                </Grid>
              ))}

              <Grid item size={{ xs: 12, sm: 6 }}>
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
                  {formik?.values?.imges?.length || 0} file(s) selected
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
