import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { LatestData } from '../../redux/api';
import { filterdata } from '../../redux/exchangeSlice';

const Support = () => {
  const { currencyCode } = useParams();
  const dispatch = useDispatch();
  const { exchange, latest, status } = useSelector((state) => state.exchange);
  const selectedExchange = exchange[currencyCode];

  useEffect(() => {
    dispatch(LatestData(currencyCode));
    dispatch(filterdata(''));
  }, [currencyCode, dispatch]);

  if (!selectedExchange) {
    return (
      <section className="support">
        <div className="details">
          <h2>Currency not found</h2>
        </div>
      </section>
    );
  }

  if (!latest || !latest.rates || status) {
    return (
      <section className="support">
        <div className="details">
          <h2>...loading</h2>
        </div>
      </section>
    );
  }

  const rates = Object.entries(latest.rates).slice(0, 6);

  return (
    <section className="support">
      <div className="details">
        <div className="detailsTop">
          <img src={selectedExchange.icon} alt="" />
          <h2>{selectedExchange.countryName}</h2>
        </div>
        <div className="detailsmain">
          <ul>
            <li>
              <span>Currency Name: </span>
              <span>{selectedExchange.currencyName}</span>
            </li>
            <li>
              <span>Currency Code: </span>
              <span>{selectedExchange.currencyCode}</span>
            </li>
            <li>
              <span>Country Code: </span>
              <span>{selectedExchange.countryCode}</span>
            </li>
            <li>
              <span>Available From: </span>
              <span>{selectedExchange.availableFrom}</span>
            </li>
            <li>
              <span>Available Until: </span>
              <span>{selectedExchange.availableUntil}</span>
            </li>
          </ul>
        </div>
        <div className="Latest">
          <h1>Latest Prices Conversion</h1>
          <ul className="rates">
            {rates.map(([currencyCode, rate]) => (
              <li key={currencyCode}>
                <span>{currencyCode}</span>
                :
                <span>{rate}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Support;
