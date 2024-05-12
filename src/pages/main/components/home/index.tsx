import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h3 className="text-xl m-5">TZ for Frontend position in TDS. Press START button.</h3>
      <Link to="/users" className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded">START</Link>
    </div>
  );
}

export default HomePage;
