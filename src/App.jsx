import Navbar from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div className="w-screen h-screen bg-gray-800 text-white py-10 px-[10%]">
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;
