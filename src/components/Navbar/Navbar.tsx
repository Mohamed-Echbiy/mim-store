import { useState } from "react";
import { About, Home, Instagram, Services } from "../../Icons/icons";
import Container from "../common/Container";
import "./navbar.css";

function Navbar() {
  const [active, setActive] = useState(0);
  return (
    <Container props="fixed top-0 left-0 w-full">
      <div className="navbar_container py-4 flex-col md:flex-row flex items-center">
        <div className="logo w-40 mx-auto mb-4 md:mb-0 ">
          <img src="./logo.png" alt="mim store" className="w-full" />
        </div>
        <div className="links h-11 flex items-center justify-around md:justify-end flex-grow w-full md:w-fit px-1 border md:border-0 rounded-full">
          <li
            onClick={() => setActive(1)}
            className={`${active === 1 ? "active_tab" : ""} link mr-2 md:mr-4`}
          >
            <span className={`${active === 1 ? "active_tab" : ""}`}>
              <Home />
            </span>
            <span
              className={`tab_name ${
                active === 1 ? " w-20" : "w-0"
              } overflow-hidden sm:w-fit text-sm md:text-base`}
            >
              Home
            </span>
          </li>
          <li
            onClick={() => setActive(2)}
            className={`${active === 2 ? "active_tab" : ""} link mr-2 md:mr-4`}
          >
            <span>
              <Services />
            </span>
            <span
              className={`tab_name ${
                active === 2 ? " w-20" : "w-0"
              } overflow-hidden sm:w-fit text-sm md:text-base`}
            >
              Services
            </span>
          </li>
          <li
            onClick={() => setActive(3)}
            className={`${active === 3 ? "active_tab" : ""} link mr-2 md:mr-6`}
          >
            <span>
              <About />
            </span>
            <span
              className={`tab_name ${
                active === 3 ? " w-20" : "w-0"
              } overflow-hidden sm:w-fit text-sm md:text-base`}
            >
              About
            </span>
          </li>
          <li
            onClick={() => setActive(4)}
            className={`${active === 4 ? "active_tab" : ""} link mr-2`}
          >
            <span>
              <Instagram />
            </span>
            <span
              className={`tab_name ${
                active === 4 ? " w-30" : "w-0"
              } overflow-hidden sm:w-fit text-sm md:text-base break-word`}
            >
              Follow Me
            </span>
          </li>
        </div>
      </div>
    </Container>
  );
}

export default Navbar;
