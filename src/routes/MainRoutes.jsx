import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Recipe from "../pages/Recipe";
import CreateRecipe from "../pages/CreateRecipe";
import SingleRecipe from "../pages/SingleRecipe";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/create-recipe" element={<CreateRecipe />} />
        <Route path="/recipes/details/:id" element={<SingleRecipe />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
