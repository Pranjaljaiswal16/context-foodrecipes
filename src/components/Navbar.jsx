import { NavLink } from "react-router";

const Navbar = () => {
  return (

    <div className="flex justify-center items-center gap-10 text-sm mb-10">
      <NavLink className={(e) => (e.isActive ? "text-red-400" : "")} to={"/"}>
        Home
      </NavLink>

      <NavLink
        className={(e) => (e.isActive ? "text-red-400" : "")}
        to={"/about"}
      >
        About
      </NavLink>

      <NavLink
        className={(e) => (e.isActive ? "text-red-400" : "")}
        to={"/recipe"}
      >
        Recipes
      </NavLink>

      <NavLink
        className={(e) => (e.isActive ? "text-red-400" : "")}
        to={"/create-recipe"}
      >
        Create Recipes
      </NavLink>
    </div>

    
  );
};

export default Navbar;
