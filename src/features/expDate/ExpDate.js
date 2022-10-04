import clamp from "functions/clamp";
import formatTo2Digits from "functions/formatTo2Digits";
import { useDispatch, useSelector } from "react-redux";
import { updateMonth } from "./expDateSlice";

const ExpDate = () => {
  const date = useSelector((state) => state.expDate);
  console.log(date);
  const month = date.month || "00";
  const year = date.year || "00";
  return <span className="card-small-text">{month + "/" + year}</span>;
};

export const ExpDateInput = () => {
  const dispatch = useDispatch();
  const month = useSelector((state) => state.expDate.month);
  const value = month === "00" ? "" : month;

  return (
    <div>
      <p htmlFor="expDate">EXP. DATE(MM/YY)</p>
      <input
        min={0}
        max={12}
        onChange={(e) => {
          const clampedMonth = clamp(e.target.value, 0, 12);
          const formattedMonth = formatTo2Digits(clampedMonth);
          dispatch(updateMonth({ month: formattedMonth }));
        }}
        className="input"
        placeholder="MM"
        type="number"
        value={value}
        name="expDate"
        id="expDate"
      />
    </div>
  );
};

export default ExpDate;
