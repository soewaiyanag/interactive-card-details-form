import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import formatNumber from "functions/formatNumber";

const NumberInput = ({ id, action, name, placeholder, maxLength }) => {
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
    dispatch(action({ value: event.target.value }));
  };

  return (
    <input
      placeholder={placeholder}
      type="text"
      maxLength={maxLength}
      className="input"
      onChange={onChangeHandler}
      value={value}
      id={id}
    />
  );
};

export default NumberInput;
