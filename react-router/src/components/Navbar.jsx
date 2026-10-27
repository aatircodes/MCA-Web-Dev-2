import { NavLink } from "react-router-dom";
import "./app.css"

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};

export default Navbar;