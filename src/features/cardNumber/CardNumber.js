import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import formatNum from "functions/formatNum";
import { update } from "./cardNumberSlice";
import fixNumber from "functions/fixNumber";

const allZero = "0".repeat(16);

const CardNumber = () => {
  const number = useSelector((state) => state.cardNumber.value);
  const formattedNumber = formatNum(number || allZero);
  return (
    <span
      className={clsx(
        "font-light text-[1.3rem] sm:text-2xl text-white",
        "tracking-widest mt-auto mb-4"
      )}
    >
      {formattedNumber}
    </span>
  );
};

export const CardNumberInput = () => {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.cardNumber.value);

  return (
    <div>
      <label htmlFor="cardNumber" className="uppercase">
        card number
      </label>
      <input
        onChange={(e) => {
          dispatch(update({ value: e.target.value }));
        }}
        maxLength="16"
        className="border border-black rounded-md py-2 px-4"
        placeholder="e.g. 1234 5678 9123 0000"
        value={number}
        type="text"
        name="cardNumber"
        id="cardNumber"
      />
    </div>
  );
};

export default CardNumber;