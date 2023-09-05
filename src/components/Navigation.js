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
          {' '}
          <i className="fa fa-solid fa-microphone" />
          <i className="fa fa-solid fa-gear" />
          {' '}
        </li>
      </ul>
    </nav>
  </header>
);
export default Navbar;
