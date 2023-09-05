import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import clamp from "functions/clamp";
import formatTo2Digits from "functions/formatTo2Digits";

const NumberInput = ({ min, max, id, action, name, placeholder }) => {
  const dispatch = useDispatch();
  const stateValue = useSelector((state) => state[name].value);

  /* use of ref: I could easily use props for originalValue/
   but it would be difficult to maintain because it would be/
   two original values: one from props and/
   one from initialState from Slice./
   Therefore, I want to save value from initialState and use Ref */
  const originalValueRef = useRef(null);
  /* if the value is null, change the value to stateValue which/
  is the value of initialState */
  originalValueRef.current = originalValueRef.current ?? stateValue;
  /* then assign it to variable below */
  const originalValue = originalValueRef.current;
  const value = stateValue === originalValue ? "" : stateValue;

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
