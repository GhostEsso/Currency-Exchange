import { Routes, Route } from 'react-router-dom';
import Home from './currencyComponents/Home';
import Support from './currencyComponents/Supported';

const CurrencyExchange = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/support" element={<Support />} />
  </Routes>
);
export default CurrencyExchange;
