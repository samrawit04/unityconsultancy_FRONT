
import { IconUser } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-purple-900 shadow-sm py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="bg-white rounded-full p-1">
            <img src="/src/asset/logo.png" alt="Unity Logo" className="h-12 w-12 filter invert" />
          </div>
        </Link>
        <div className="flex items-center space-x-6">
         <Link to="/" className="text-white hover:text-[#3a2057] font-medium">
            Home
          </Link>
          <a href="#about" className="text-white hover:text-[#3a2057] font-medium">
            About
          </a>
          <a href="#services" className="text-white hover:text-[#3a2057] font-medium">
            Services
          </a>
          <a href="#therapists" className="text-white hover:text-[#3a2057] font-medium">
            Therapists
          </a>
         
          <Link to="/login" className="text-white hover:text-[#3a2057] font-medium">
           Sign In
          </Link>
          {/* <Link to="/register" className="bg-white text-black px-4 py-2 rounded-md hover:bg-[#3a2057] transition-colors">
            Get Started
          </Link> */}
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
