import axios from "axios";
import { useSelector } from "react-redux";

//   const token = useSelector((state) => state.product.token);
//   console.log("token =",token);
let token = localStorage.getItem("token");

export const productDataGet = async () => {
  try {
    const response = await axios.get("http://localhost:3030/product", {
      headers: {
        Authorization: token,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching product data", error);
    return [];
  }
};
