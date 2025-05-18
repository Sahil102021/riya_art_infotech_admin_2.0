import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoaderProvider } from "./context/LoaderProvider";
import ProductDetail from "./pages/ProductDetail";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Dashboard from "./pages/Dashboard";
import Loader from "./components/Loader";
import { useLoader } from "./context/Context";
import { ToastContainer } from "react-toastify";
import "./App.css";
import NotFoundPage from "./pages/NotFoundPage";
import Secure from "./components/Secure";
import Profile from "./pages/Profile";

const AppContent = () => {
  const { loading } = useLoader();

  return (
    <>
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Secure><Dashboard /></Secure>} />
        <Route path="/product" element={<Secure><ProductDetail /></Secure>} />
        <Route path="/profile" element={<Secure><Profile/></Secure>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        limit={3}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <LoaderProvider>
        <AppContent />
      </LoaderProvider>
    </>
  );
}

export default App;
