import React, { useEffect } from "react";
import * as Yup from "yup";
import {
  Box,
  TextField,
  Typography,
  Button,
  Paper,
  useTheme,
} from "@mui/material";
import { Data_security_01, flower, signupPageImg } from "../../assets/images";
import { useFormik } from "formik";
import { useLoader } from "../../context/Context";
import { toast } from "react-toastify";
import { adminLogin } from "../../actions/auth";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../Reducers/productSlice";


const LoginPage = () => {
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
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalied Email").required("Please Enter A Email"),
      password: Yup.string().min(6, "Mininum 6 characters").required("Please Enter A Password"),
    }),
    onSubmit: async (values) => {
      try {
        const loginResponse = await adminLogin(values);
        console.log(loginResponse);
        console.log(loginResponse?.status);
        console.log(loginResponse?.token);
        if (loginResponse?.status === 200) {
         let token = localStorage.setItem("token", loginResponse?.token);
         setToken(token);
        }
        Navigate('/dashboard');
      } catch (error) {
        toast.error(error.message);
        throw new Error("login page => ", error);
      }
    },
  });

  return (
    <Box sx={{ width: "100%", display: "flex", minHeight: "100vh" }}>
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
          src={Data_security_01}
          alt="Security"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

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
              gap: "0px",
              margin: "auto",
            }}
          >
            <Typography
              component="h1"
              variant="h4"
              fontWeight="bold"
              gutterBottom
            >
              Welcome To Riya Art Infotech
            </Typography>

            <Typography variant="body2" color="text.secondary" mb={3}>
              Sign up to your account
            </Typography>

            <TextField
              margin="normal"
              fullWidth
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
            >
              Sign In
            </Button>

            <Typography variant="body2" color="text.secondary">
              Don’t have an account?{" "}
              <Button variant="text" size="small">
                Sign Up
              </Button>
            </Typography>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default LoginPage;
