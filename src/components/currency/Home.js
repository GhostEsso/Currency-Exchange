import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Exchange from './Exchange';
import { filterdata } from '../../redux/exchangeSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { exchange } = useSelector((state) => state.exchange);
  const limitValues = Object.values(exchange).slice(0, 200);
  const [result, setResult] = useState('');

  const search = (e) => {
    const { value } = e.target;
    const filterData = limitValues.filter((item) => item.currencyCode === value.toUpperCase());
    dispatch(filterdata(filterData));
    setResult(value);
  };

  return (
    <section className="Container">
      <div className="HomeTop">
        <input onChange={search} type="search" value={result} placeholder="Search" />
        <h1>Exchange Your Currency</h1>
      </div>
      <Exchange />
    </section>
  );
};

export default Home;
