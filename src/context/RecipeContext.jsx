import { createContext, useEffect, useState } from "react";

export const recipecontext = createContext(null);

const RecipeContext = (props) => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    setdata(JSON.parse(localStorage.getItem("recipes"))) || [];
  }, []);

  return (
    <div>
      <recipecontext.Provider value={{ data, setdata }}>
        {props.children}
      </recipecontext.Provider>
    </div>
  );
};

export default RecipeContext;
