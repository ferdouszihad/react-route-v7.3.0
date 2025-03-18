import { Link } from "react-router";

const Navigation = () => {
  return (
    <nav className="">
      <h2 className="text-center">Developers Book</h2>
      <ul className="flex justify-center space-x-4 border-b-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/developers">Developers</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
