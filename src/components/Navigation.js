import { NavLink } from 'react-router-dom';
import styles from './Styles.module.css';

const Navbar = () => (
  <header>
    <nav>
      <ul className="menu">
        <li>
          <NavLink className={styles.link} to="/">
            {' '}
            <i className="fa fa-solid fa-angle-left" />
            {' '}
          </NavLink>
        </li>
        <li>
          <NavLink to="/weather-app/" className="link"><h4>Currencies</h4></NavLink>
        </li>
        <li>
          <i className="fa fa-solid fa-microphone" data-testid="microphone-icon" />
          <i className="fa fa-solid fa-gear" data-testid="gear-icon" />
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
