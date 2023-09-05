import { Routes, Route } from 'react-router-dom';
import Home from './currency/Home';
import Support from './currency/Supported';

const CurrencyExchange = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/support/:currencyCode" element={<Support />} />
  </Routes>
);
export default CurrencyExchange;
