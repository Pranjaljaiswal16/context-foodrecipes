import { Link } from "react-router";

const RecipeCard = (props) => {
  const { id, image, title, desc, chef } = props.recipe;
  return (
    <Link
      to={`/recipes/details/${id}`}
      className="w-[20vw] rounded overflow-hidden block shadow mr-3 mb-3 hover:scale-105 duration-150"
    >
      <img src={image} alt="" className="w-full h-[22vh] object-cover" />
      <h1 className="mt-2 px-2 font-black">{title}</h1>
      <small className="px-2 text-red-400">{chef}</small>
      <p className="px-2 pb-3">
        {desc.slice(0, 100)}...
        <small className="text-blue-400 font-thin">More</small>
      </p>
    </Link>
  );
};

export default RecipeCard;
