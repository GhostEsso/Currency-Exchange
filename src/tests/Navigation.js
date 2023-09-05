import { NavLink } from 'react-router-dom';
import styles from './Styles.module.css';

const Navigation = () => (
  <header>
    <nav>
      <ul className="menu">
        <li>
          <NavLink className={styles.link} to="/">
            {' '}
            <i className="fa-solid fa-angle-left" />
            {' '}
          </NavLink>
        </li>
        <li>
          {' '}
          <i className="fa-solid fa-microphone" />
          <i className="fa-solid fa-gear" />
          {' '}
        </li>
      </ul>
    </nav>
  </header>
);
export default Navigation;
