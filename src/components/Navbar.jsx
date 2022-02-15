import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="pad d-flex s-betw">
    <Link to="/">
      <h1>Math Magicians</h1>
    </Link>
    <ul className="list-items">
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/calculator">
        <li>Calculator</li>
      </Link>
      <Link to="/quote">
        <li>Quote</li>
      </Link>
    </ul>
  </nav>
);

export default Navbar;
