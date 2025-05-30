import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaSearch, FaBars } from 'react-icons/fa';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
  };

  return (
    <header className="bg-base-200 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold">
              MyGames
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="nav-link">Games</label>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link to="/games/tictactoe">Tic Tac Toe</Link></li>
                <li><Link to="/games/snake">Snake</Link></li>
                <li><Link to="/games/pong">Pong (coming soon)</Link></li>
                <li className="divider"></li>
                <li><Link to="/games">See more...</Link></li>
              </ul>
            </div>
            <Link to="/about" className="nav-link">About&nbsp;me</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative hidden lg:block">
              <input
                type="text"
                placeholder="Search games..."
                className="input input-bordered w-full max-w-xs"
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            <div className="flex items-center space-x-2">
              <Link to="/login" className="btn btn-ghost">Login</Link>
              <Link to="/register" className="btn btn-primary">Register</Link>
            </div>

            <button onClick={toggleDarkMode} className="btn btn-ghost btn-circle">
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>

            <div className="dropdown dropdown-end lg:hidden">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <FaBars />
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li><Link to="/">Home</Link></li>
                <li>
                  <details>
                    <summary>Games</summary>
                    <ul>
                      <li><Link to="/games/tictactoe">Tic Tac Toe</Link></li>
                      <li><Link to="/games/snake">Snake</Link></li>
                      <li><Link to="/games">See more...</Link></li>
                    </ul>
                  </details>
                </li>
                <li><Link to="/about">About me</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
