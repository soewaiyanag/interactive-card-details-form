import { useSelector, useDispatch } from "react-redux";
import { update } from "./cardHolderSlice";

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
      <label htmlFor="cardNumber" className="uppercase">
        cardholder name
      </label>
      <input
        onChange={(e) => {
          dispatch(update({ value: e.target.value }));
        }}
        className="border border-black rounded-md py-2 px-4"
        placeholder={"e.g. " + placeHolderName}
        type="text"
        name="cardNumber"
        id="cardNumber"
      />
    </div>
  );
};

export default CardHolder;
