import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img className='h-10' src='logo.png' alt='logo'></img>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium text-2xl">Home</Link>
                <Link to="/users" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-2xl font-medium">Users</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
