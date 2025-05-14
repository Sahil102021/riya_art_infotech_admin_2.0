import React, { useEffect } from "react";
import * as Yup from "yup";
import {
  Box,
  TextField,
  Typography,
  Button,
  useTheme,
} from "@mui/material";
import { flower } from "../../assets/images";
import { useFormik } from "formik";
import { useLoader } from "../../context/Context";
import axios from "axios";
import { adminSignup } from "../../actions/auth/auth.action";
import { toast } from "react-toastify";
import { Navigate, redirect, useNavigate } from "react-router-dom";

const SignupPage = () => {
  let Navigate = useNavigate();
  const theme = useTheme();
  const { setLoading } = useLoader();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [setLoading]);

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
      firstname: Yup.string().required("Please enter your first name"),
      lastname: Yup.string().required("Please enter your last name"),
      contact: Yup.string().matches(/^[0-9]{10}$/, "Contact must be 10 digits").required("Please enter a contact number"),
      username: Yup.string().required("Please enter a username"),
      email: Yup.string().email("Invalid email").required("Please enter your email"),
      password: Yup.string().min(6, "Minimum 6 characters").required("Please enter a password"),
    }),
    onSubmit: async (values) => {
      try {
        let signupResponse = await adminSignup(values);
        console.log(signupResponse?.data)
        console.log(signupResponse?.token)
        if(signupResponse?.status === 200) {
          let token = localStorage.setItem('token', signupResponse?.token);
        }
        Navigate('/dashboard');
      } catch (error) {
        toast.error(error.message);
        // throw new Error("signup page => ", error);
        
      }
    },
  });

  return (
    <Box sx={{ width: "100%", display: "flex", minHeight: "100vh" }}>
      {/* Left Side Image */}
      <Box
        sx={{
          width: { xs: "0%", md: "65%" },
          height: "100vh",
          display: { xs: "none", md: "block" },
          backgroundColor: "blue",
        }}
      >
        <Box
          component="img"
          src={flower}
          alt="Signup Banner"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Form Section */}
      <Box
        sx={{
          width: { xs: "100%", md: "35%" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
        }}
      >
        <form onSubmit={formik.handleSubmit} className="userLoginSignup">
          <Box
            sx={{
              width: "100%",
              maxWidth: "500px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <Typography component="h1" variant="h4" fontWeight="bold" gutterBottom>
              Welcome To Riya Art Infotech
            </Typography>

            <Typography variant="body2" color="text.secondary" mb={3}>
              Sign up to your account
            </Typography>

            <TextField
              margin="normal"
              fullWidth
              label="First Name"
              name="firstname"
              autoComplete="firstname"
              autoFocus
              {...formik.getFieldProps("firstname")}
              error={formik.touched.firstname && Boolean(formik.errors.firstname)}
              helperText={formik.touched.firstname && formik.errors.firstname}
            />

            <TextField
              margin="normal"
              fullWidth
              label="Last Name"
              name="lastname"
              autoComplete="lastname"
              {...formik.getFieldProps("lastname")}
              error={formik.touched.lastname && Boolean(formik.errors.lastname)}
              helperText={formik.touched.lastname && formik.errors.lastname}
            />

            <TextField
              margin="normal"
              fullWidth
              label="Contact Number"
              name="contact"
              autoComplete="contact"
              {...formik.getFieldProps("contact")}
              error={formik.touched.contact && Boolean(formik.errors.contact)}
              helperText={formik.touched.contact && formik.errors.contact}
            />

            <TextField
              margin="normal"
              fullWidth
              label="Username"
              name="username"
              autoComplete="username"
              {...formik.getFieldProps("username")}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />

            <TextField
              margin="normal"
              fullWidth
              label="Email Address"
              name="email"
              autoComplete="email"
              {...formik.getFieldProps("email")}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              {...formik.getFieldProps("password")}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={formik.isSubmitting}
            >
              Sign Up
            </Button>

            <Typography variant="body2" color="text.secondary">
              Already have an account?{" "}
              <Button variant="text" size="small">
                Sign In
              </Button>
            </Typography>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default SignupPage;
