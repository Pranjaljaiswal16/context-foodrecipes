import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const CreateRecipe = () => {
  const navigate = useNavigate();

  const { data, setdata } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();

  const submitHandler = (recipe) => {
    recipe.id = nanoid();

    const copydata = [...data];
    copydata.push(recipe);
    setdata(copydata);

    toast.success("New recipe created!");
    reset();

    navigate("/recipes");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          {...register("title")}
          type="text"
          placeholder="Recipe Title"
          className="border-b outline-0 p-2 block"
        />
        <small className="text-red-400 font-thin">This is What this is</small>
        <br />

        <input
          {...register("image")}
          type="url"
          placeholder="Images URL"
          className="border-b outline-0 p-2 block"
        />
        <br />

        <input
          {...register("chef")}
          type="text"
          placeholder="Chef Name"
          className="border-b outline-0 p-2 block"
        />
        <br />

        <textarea
          {...register("desc")}
          type="text"
          placeholder="Enter description Here..."
          className="border-b outline-0 p-2 block"
        ></textarea>
        <br />

        <textarea
          {...register("ingre")}
          type="text"
          placeholder="Write Ingredients separted by Comma"
          className="border-b outline-0 p-2 block"
        ></textarea>
        <br />

        <textarea
          {...register("instr")}
          type="text"
          placeholder="Enter Instruction Here..."
          className="border-b outline-0 p-2 block"
        ></textarea>
        <br />

        <select {...register("category")}>
          <option value={"breakfast"}>BreakFast</option>
          <option value={"lunch"}>Lunch</option>
          <option value={"supper"}>Supper</option>
          <option value={"dinner"}>Dinner</option>
        </select>
        <br />
        <br />

        <button className="px-4 py-2 font-thin bg-gray-900 rounded cursor-pointer">
          Save Recipes
        </button>
      </form>
    </div>
  );
};

export default CreateRecipe;
