import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Avatar,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import MainDrawer from "../MainPage/MainDrawer";
import { profileList } from "../coansta/consta";

export default function ProfilePage() {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      contact: "",
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("First name is required"),
      lastname: Yup.string().required("Last name is required"),
      contact: Yup.string()
        .matches(/^[0-9]{10}$/, "Must be a valid 10-digit number")
        .required("Contact is required"),
      username: Yup.string().required("Username is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Profile submitted:", values);
      // Handle API update here
    },
  });

  return (
    <MainDrawer>
      <Box sx={{maxWidth:'600px' , boxShadow:'none'}}>
        <Card >
          <CardContent>
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row", }}
              gap={4}
              sx={{paddingBottom:"50px"}}
              alignItems="center" >
              <Avatar
                alt="Profile"
                src="/profile-placeholder.png"
                sx={{ width: 100, height: 100 }} />
              <Box sx={{paddingLeft:"100px"}}>
                <Typography variant="h5" fontWeight={600}>
                  Profile Settings
                </Typography>
                <Typography mt={1}>
                  Username: {formik.values.firstname} {formik.values.lastname}
                </Typography>
                <Typography>Contact: {formik.values.contact}</Typography>
                <Typography>Email: {formik.values.email}</Typography>
                <Typography>
                  Password: {formik.values.password ? "••••••" : ""}
                </Typography>
              </Box>
            </Box>

            <Box
              component="form"
              className="mt-6"
              onSubmit={formik.handleSubmit}
              sx={{}}
            >
              <Grid container spacing={2} mt={1}>
                { profileList.map(({ name, label, type = "text" }) => (
                  <Grid item size={{ xs: 12, sm: 6, }} key={name}>
                    <TextField
                      fullWidth
                      size="small"
                      name={name}
                      label={label}
                      type={type}
                      value={formik.values[name]}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched[name] && Boolean(formik.errors[name])
                      }
                      helperText={formik.touched[name] && formik.errors[name]}
                    />
                  </Grid>
                ))}
              </Grid>

              <Box textAlign="center" mt={4}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ px: 4, py: 1.5, borderRadius: 2 }}
                >
                  Save Changes
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </MainDrawer>
  );
}
