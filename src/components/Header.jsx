import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          listStyle: "none",
          backgroundColor: "black",
          color: "white",
          height: "40px",
        }}
      >
        <li>
          {" "}
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>{" "}
        </li>
        <li> Sign In </li>
      </ul>
    </div>
  );
};

export default Header;
