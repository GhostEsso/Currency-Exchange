import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../Styles.module.css";
import { LatestData } from "../../redux/api";

const List = () => {
  const Dispatch = useDispatch();
  const image1 = useSelector((state) => state.exchange.image1);
  const image2 = useSelector((state) => state.exchange.image2);

  useEffect(() => {
    Dispatch(LatestData());
  }, [Dispatch]);

  const { convert, latest } = useSelector((state) => state.exchange);
  const newRef = latest.rates;
  return (
    <section className="listContainer">
      <div className="equalto">
        <div className="changing">
          <img src={image1} alt="" />
          <p className={convert.result ? "" : styles.falseLine}>
            {convert.result
              ? convert.result
              : "If you found no value then possible thats are not available to convert"}
          </p>
          <img src={image2} alt="" />
        </div>
      </div>
      <ul className="list">
        {newRef &&
          Object.entries(newRef).map(([currency, rate]) => (
            <li className="listitem" key={uuidv4()}>
              <p>{currency}</p>
              <p>{rate}</p>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default List;
