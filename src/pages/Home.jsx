import { useState } from "react";
import axios from "../utils/axis";

const Home = () => {
  const getproduct = async () => {
    try {
      const { data } = await axios.get("/products");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useState(() => {
    getproduct();
  });

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
