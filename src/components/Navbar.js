import React from "react";
import { FaInfoCircle } from "react-icons/fa";

function Navbar({ executeScroll }) {
  return (
    <>
      <div className="navbar">
        <div className="logo">Pomoductivity</div>
        <a href="javascript:" onClick={executeScroll}>
          <ul>
            <FaInfoCircle />
          </ul>
        </a>
      </div>
    </>
  );
}

export default Navbar;
