import { About, Home, Services } from "../../Icons/icons";
import image from "../../images/logo.png";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar_container pt-2 ">
        <div className="navbar_wrapper flex flex-wrap w-full items-center justify-center">
          <div className="logo w-32 sm:w-40 mr-12 max-w-fit">
            <img src={image} alt="Mimi Store" className="w-full mb-2 block " />
          </div>
          <nav className="navbar flex items-center max-w-fit">
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
      </div>
    </>
  );
}

export default Navbar;
