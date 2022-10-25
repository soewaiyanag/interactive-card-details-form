import { update } from "./cardHolderSlice";
import { useDispatch } from "react-redux";

const CardHolderInput = ({ placeholderName }) => {
  const dispatch = useDispatch();
  return (
    <input
      className="input"
      maxLength="20"
      onChange={(e) => {
        dispatch(update({ value: e.target.value }));
      }}
      placeholder={"e.g. " + placeholderName}
      type="text"
      name="cardHolder"
      id="cardHolder"
    />
  );
};

export default CardHolderInput;
