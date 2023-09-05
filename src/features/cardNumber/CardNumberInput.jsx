import { useDispatch, useSelector } from "react-redux";
import { update } from "./cardNumberSlice";

const CardNumberInput = () => {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.cardNumber.value);
  const setValue = (e) => {
    dispatch(update({ value: e.target.value }));
  };

  return (
    <input
      className="input"
      onChange={setValue}
      maxLength="16"
      placeholder="e.g. 1234 5678 9123 0000"
      value={number}
      type="text"
      name="cardNumber"
      id="cardNumber"
    />
  );
};

export default CardNumberInput;
