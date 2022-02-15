import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div>
    <h1>Math Magician</h1>
    <ul>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/calculate'}>Calculator</NavLink>
      <NavLink to={'/quote'}>Quote</NavLink>
    </ul>
  </div>
);

export default Navbar;
