import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Navigation.css";

Navigation.propTypes = {};

function Navigation(props) {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
