import Input from "Components/Input";
import { useDispatch, useSelector } from "react-redux";
import clamp from "functions/clamp";
import formatTo2Digits from "functions/formatTo2Digits";
import { updateYear } from "./expDateSlice";

const YearInput = () => {
  const min = 0;
  const max = 99;
  const dispatch = useDispatch();
  const year = useSelector((state) => state.expDate.year);
  const value = year === "00" ? "" : year;
  // onChange Handler
  const setYear = (e) => {
    const clampedYear = clamp(e.target.value, min, max);
    const formattedYear = formatTo2Digits(clampedYear);
    dispatch(updateYear({ year: formattedYear }));
  };

  return (
    <Input
      min={min}
      max={max}
      onChange={setYear}
      placeholder="YY"
      type="number"
      value={value}
      name="yearInput"
      id="yearInput"
    />
  );
};

export default YearInput;
