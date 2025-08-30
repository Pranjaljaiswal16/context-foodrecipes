import { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { data, setdata } = useContext(recipecontext);
  const navigate = useNavigate();

  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: recipe.title,
      chef: recipe.chef,
      image: recipe.image,
    },
  });

  const submitHandler = (recipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);

    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...recipe };
    setdata(copydata);
    toast.success("Recipes Updated");
  };

  const deleteHandler = () => {
    const filterdata = data.filter((recipe) => recipe.id != params.id);
    setdata(filterdata);
    toast.success("Recipe Deleted!");
    navigate("/recipes");
  };

  return recipe ? (
    <div className="w-full flex">
      <div className="left w-1/2 p-2">
        <h1 className="text-4xl text-green-600">{recipe.title}</h1>
        <img src={recipe.image} alt="Abc" className="h-[20vh]" />
        <h1>{recipe.chef}</h1>
        <p>{recipe.desc}</p>
      </div>

      <form onSubmit={handleSubmit(submitHandler)} className="w-1/2 p-2">
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

        <button className="px-4 py-2 font-thin bg-blue-500 rounded cursor-pointer">
          Update Recipes
        </button>
        <br />
        <br />

        <button
          className="px-4 py-2 font-thin bg-red-500 rounded cursor-pointer"
          onClick={deleteHandler}
        >
          Delete Recipes
        </button>
      </form>
    </div>
  ) : (
    "Loading..."
  );
};

export default SingleRecipe;
