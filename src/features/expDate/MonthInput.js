import Input from "Components/Input";
import { useDispatch, useSelector } from "react-redux";
import clamp from "functions/clamp";
import formatTo2Digits from "functions/formatTo2Digits";
import { updateMonth } from "./expDateSlice";

const MonthInput = () => {
  const min = 0;
  const max = 12;
  const dispatch = useDispatch();
  const month = useSelector((state) => state.expDate.month);
  const value = month === "00" ? "" : month;
  // onChange Handler
  const setMonth = (e) => {
    const clampedMonth = clamp(e.target.value, min, max);
    const formattedMonth = formatTo2Digits(clampedMonth);
    dispatch(updateMonth({ month: formattedMonth }));
  };
  return (
    <Input
      min={min}
      max={max}
      onChange={setMonth}
      placeholder="MM"
      type="number"
      value={value}
      name="monthInput"
      id="monthInput"
    />
  );
};

export default MonthInput;
