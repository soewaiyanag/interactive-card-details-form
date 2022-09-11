import clsx from "clsx";
import { useSelector } from "react-redux";
import formatNum from "./functions/formatNum";

const CardNumber = () => {
  const number = useSelector((state) => state.cardNumber.value);
  const formattedNumber = formatNum(number);
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

export default CardNumber;
