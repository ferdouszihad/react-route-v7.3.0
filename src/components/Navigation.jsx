import { Link } from "react-router";

const Navigation = () => {
  function getRandomRGBColor() {
    const r = Math.floor(Math.random() * 256); // Random value between 0-255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b} ,.3)`;
  }

  return (
    <nav style={{ backgroundColor: getRandomRGBColor() }}>
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
