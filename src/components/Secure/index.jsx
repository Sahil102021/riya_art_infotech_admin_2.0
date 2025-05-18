import React, { useEffect, useState } from "react";
import { useLoader } from "../../context/Context";
import { useNavigate } from "react-router-dom";

const Secure = ({ children }) => {
  const { setLoading } = useLoader();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkToken = () => {
      setLoading(true);
      const token = localStorage.getItem("token");
      // const token = "sasdkihhjygDgyudfsfj8sffjfmsfodjjf";
      if (!token) {
        navigate("/");
      } else {
        setIsAuthenticated(true);
      }
      setLoading(false);
    };

    checkToken();
  }, [navigate, setLoading]);

  if (!isAuthenticated) return null; 

  return <>{children}</>;
};

export default Secure;
