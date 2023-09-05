import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Support = () => {
  const { currencyCode } = useParams();
  const { exchange } = useSelector((state) => state.exchange);
  const selectedExchange = exchange[currencyCode];

  if (!selectedExchange) {
    return (
      <section className="support">
        <div className="details">
          <h2>Currency not found</h2>
        </div>
      </section>
    );
  }

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
      </div>
    </section>
  );
};

export default Support;
