import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <header>
    <h1>
      <a href="/">Currency Converter</a>
    </h1>
    <nav>
      <ul className="menu">
        <li>
          <NavLink className={StyleSheet.link} to="/">
            Converter
          </NavLink>
        </li>
        <li>
          <NavLink className={StyleSheet.link} to="/">
            Currencies Supported
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;
