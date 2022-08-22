import React from "react";

const Navbar = (props) => {
  return (
    <React.StrictMode>
      <div className="container-fluid bg-dark text-light p-2 text-center">
        <h4>{props.title}</h4>
      </div>
    </React.StrictMode>
  );
};

export default Navbar;
