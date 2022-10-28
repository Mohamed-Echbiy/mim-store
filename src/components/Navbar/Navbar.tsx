import { About, Home, Services } from "../../Icons/icons";
import image from "../../images/logo.png";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar_container mt-6 sm:flex items-center justify-center py-1 mb-20 max-w-fit mx-auto  drop-shadow-2xl">
      <div className="logo w-32 mx-auto sm:w-40 sm:mr-12 ">
        <img src={image} alt="Mimi Store" className="w-full mb-3 block " />
      </div>
      <nav className="navbar flex h-16 items-center">
        <a href="#home">
          <li className="mr-4 flex relative">
            <Home /> <span>Home</span>
          </li>
        </a>
        <a href="#about">
          <li className="mr-4 flex relative">
            <About /> <span>About us</span>
          </li>
        </a>
        <a href="#services">
          <li className="flex relative">
            <Services /> <span>Services</span>
          </li>
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
