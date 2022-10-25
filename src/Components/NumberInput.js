import { useDispatch, useSelector } from "react-redux";
import clamp from "functions/clamp";
import formatTo2Digits from "functions/formatTo2Digits";

const NumberInput = ({ min, max, id, action, name, placeholder }) => {
  const dispatch = useDispatch();
  const stateValue = useSelector((state) => state.expDate[name]);
  const value = stateValue === "00" ? "" : stateValue;

  const onChangeHandler = (event) => {
    const clampedValue = clamp(event.target.value, min, max);
    const formattedValue = formatTo2Digits(clampedValue);
    dispatch(action({ [name]: formattedValue }));
  };

  return (
    <input
      placeholder={placeholder}
      type="number"
      className="input text-center"
      onChange={onChangeHandler}
      value={value}
      id={id}
    />
  );
};

export default NumberInput;
