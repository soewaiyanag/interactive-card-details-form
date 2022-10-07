import { update } from "./cardHolderSlice";
import Input from "Components/Input";
import { useDispatch } from "react-redux";

const CardHolderInput = ({ placeholderName }) => {
  const dispatch = useDispatch();
  return (
    <Input
      maxLength="20"
      onChange={(e) => {
        dispatch(update({ value: e.target.value }));
      }}
      className="input"
      placeholder={"e.g. " + placeholderName}
      type="text"
      name="cardHolder"
      id="cardHolder"
    />
  );
};

export default CardHolderInput;
