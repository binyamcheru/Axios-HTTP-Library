import { useEffect } from "react";
import authFetch from "../axios/custom";
import axios from "axios";

const randomUserUrl = "https://randomuser.me/api";

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const resp1 = await authFetch("/react-store-products");
      const resp2 = await axios.get(randomUserUrl);
      console.log(resp1.data);
      console.log(resp2.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">custom instance</h2>;
};
export default CustomInstance;
