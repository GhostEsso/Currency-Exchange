import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { FetchData, GetData } from '../../redux/api';
import { add } from '../../redux/exchangeSlice';

const Exchange = () => {
  const dispatch = useDispatch();
  const { exchange } = useSelector((state) => state.exchange);
  const newData = Object.values(exchange);

  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOptions, setSelectedOptions] = useState('');
  const [data, setData] = useState('');

  useEffect(() => {
    dispatch(FetchData());
  }, [dispatch]);

  const handleSelectChange = (event, setter) => {
    const selectedValue = event.target.value;
    const selectedCurrency = newData.find(
      (item) => item.currencyCode === selectedValue,
    );
    setter(selectedValue);
    dispatch(add(selectedCurrency?.icon || ''));
  };

  const onChange = (e) => {
    setData(e.target.value);
  };

  const onSubmit = () => {
    const from = selectedOption || 'AGLD';
    const to = selectedOptions || 'AGLD';
    dispatch(GetData({ amount: data, from, to }));
    setSelectedOption('');
    setSelectedOptions('');
    setData('');
  };

  return (
    <div className="Exchange">
      <form action="#">
        <div className="formInside">
          <label htmlFor="amount">
            <span>Amount</span>
            <input
              type="number"
              onChange={onChange}
              value={data}
              name="amount"
            />
          </label>
          <label htmlFor="from">
            <span>From</span>
            <div className="selectors">
              <select
                name="from"
                id="from"
                value={selectedOption}
                onChange={(e) => handleSelectChange(e, setSelectedOption)}
              >
                {newData.map((item) => (
                  <option
                    key={uuidv4()}
                    value={item.currencyCode}
                    label={item.currencyCode}
                  >
                    {item.currencyCode}
                  </option>
                ))}
              </select>
            </div>
          </label>
          <p className="equal">
            {selectedOption && (
              <img id="selectedIcon" src={selectedOption} alt="" />
            )}
            =
            {selectedOptions && (
              <img id="selectedIcon" src={selectedOptions} alt="" />
            )}
          </p>
          <label htmlFor="to">
            <span>To</span>
            <div className="selectors">
              <select
                name="to"
                id="to"
                value={selectedOptions}
                onChange={(e) => handleSelectChange(e, setSelectedOptions)}
              >
                {newData.map((item) => (
                  <option
                    key={uuidv4()}
                    value={item.currencyCode}
                    label={item.currencyCode}
                  >
                    {item.currencyCode}
                  </option>
                ))}
              </select>
            </div>
          </label>
        </div>
        <input type="button" value="Convert" onClick={onSubmit} />
      </form>
    </div>
  );
};

export default Exchange;
