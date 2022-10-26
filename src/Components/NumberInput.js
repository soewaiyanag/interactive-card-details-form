import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import clamp from "functions/clamp";
import formatTo2Digits from "functions/formatTo2Digits";

const NumberInput = ({ min, max, id, action, name, placeholder }) => {
  const dispatch = useDispatch();
  const stateValue = useSelector((state) => state[name].value);
  const value = stateValue === "00" ? "" : stateValue;

  const onChangeHandler = (event) => {
    const clampedValue = clamp(event.target.value, min, max);
    const formattedValue = formatTo2Digits(clampedValue);
    dispatch(action({ value: formattedValue }));
  };

  return (
    <input
      placeholder={placeholder}
      type="number"
      className="input"
      onChange={onChangeHandler}
      value={value}
      id={id}
    />
  );
};

export default NumberInput;
