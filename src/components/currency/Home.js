import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Exchange from './Exchange';
import { filterdata } from '../../redux/exchangeSlice';

const Home = () => {
  const dispatch = useDispatch();
  const exchange = useSelector((state) => state.exchange);

  const search = useCallback((e) => {
    const { value } = e.target;
    const filterData = exchange.slice(0, 200).filter((item) => item.currencyCode
    === value.toUpperCase());
    dispatch(filterdata(filterData));
  }, [dispatch, exchange]);

  return (
    <section className="Container">
      <div className="HomeTop">
        <input onChange={search} type="search" placeholder="Search" />
        <h1>Exchange Your Currency</h1>
      </div>
      <Exchange />
    </section>
  );
};

export default Home;
