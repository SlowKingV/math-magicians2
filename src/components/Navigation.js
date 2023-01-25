import { Link } from 'react-router-dom';

import './css/Navigation.css';

const Navigation = () => (
  <>
    <nav className="nav-bar">
      <h1>Math Magicians</h1>
      <ul className="no-list nav-links">
        <li className="nav-link"><Link to="/">Home</Link></li>
        <li className="nav-link"><Link to="/calculator">Calculator</Link></li>
        <li className="nav-link"><Link to="/quote">Quote</Link></li>
      </ul>
    </nav>
  </>
);

export default Navigation;
