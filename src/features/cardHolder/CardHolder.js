import { useSelector, useDispatch } from "react-redux";
import { update } from "./cardHolderSlice";
import Input from "Components/Input";

const placeHolderName = "Jane Appleseed";

const CardHolder = () => {
  const name = useSelector((state) => state.cardHolder.name);
  return (
    <span className="card-small-text uppercase">{name || placeHolderName}</span>
  );
};

export const CardHolderInput = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <label htmlFor="cardHolder" className="uppercase">
        cardholder name
      </label>
      <Input
        onChange={(e) => {
          dispatch(update({ value: e.target.value }));
        }}
        className="input"
        placeholder={"e.g. " + placeHolderName}
        type="text"
        name="cardHolder"
        id="cardHolder"
      />
    </div>
  );
};

export default CardHolder;
