import { useSelector } from "react-redux";
import clsx from "clsx";

import formatNum from "functions/formatNum";

const allZero = "0".repeat(16);

const CardNumber = () => {
  const number = useSelector((state) => state.cardNumber.value);
  const formattedNumber = formatNum(number || allZero);
  return (
    <span
      className={clsx(
        "font-light text-[1.075rem] xs:text-[1.3rem] sm:text-2xl text-white",
        "tracking-widest mt-auto mb-4"
      )}
    >
      {formattedNumber}
    </span>
  );
};

export default CardNumber;
