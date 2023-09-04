import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FetchData } from '../../redux/api';

const Support = () => {
  const dispatch = useDispatch();
  const { exchange, error, status } = useSelector((state) => state.exchange);

  useEffect(() => {
    dispatch(FetchData());
  }, [dispatch]);

  if (error) {
    return error;
  }

  if (status) {
    return 'Loading...';
  }

  return (
    <section className="support">
      <div className="supportContainer">
        <h1>Support Currencies</h1>
        <ul className="supportList">
          {exchange.map((item) => {
            const {
              currencyName,
              countryName,
              countryCode,
              icon,
              availableFrom,
              availableUntil,
              status,
            } = item;
            return (
              <li key={uuidv4()}>
                <img src={icon} alt="" />
                <p>{currencyName}</p>
                <p>{countryCode}</p>
                <p>
                  {availableFrom}
                  -
                  {availableUntil}
                </p>
                <p>{countryName}</p>
                <p className="status">{status}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Support;
