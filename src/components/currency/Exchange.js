import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchData } from '../../redux/api';
import styles from '../Styles.module.css';

const Card = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchData());
  }, [dispatch]);

  const { exchange, filters } = useSelector((state) => state.exchange);
  const Limit = Object.values(exchange).slice(0, 18);

  if (filters && filters.length > 0) {
    return (
      <Link
        to={`/support/${filters[0].currencyCode}`}
        key={filters[0].currencyCode}
        className={styles.styleLink}
      >
        <div className="CardContainer">
          <div className="cards">
            <img src={filters[0].icon} alt="" />
            <div className="currency">
              <h1>Currency Names:</h1>
              <p>{filters[0].currencyName}</p>
            </div>
            <div className="date">
              <p>
                {filters[0].availableFrom}
                {' '}
                -
                {filters[0].availableUntil}
              </p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
  return (
    <div className="Containers">
      {Limit.map((currency) => (
        <Link
          to={`/support/${currency.currencyCode}`}
          key={currency.currencyCode}
          className={styles.styleLink}
        >
          <div className="card">
            <img src={currency.icon} alt="" />
            <div className="currency">
              <h1>Currency Names:</h1>
              <p>{currency.currencyCode}</p>
            </div>
            <div className="date">
              <p>
                {currency.availableFrom}
                {' '}
                -
                {currency.availableUntil}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
