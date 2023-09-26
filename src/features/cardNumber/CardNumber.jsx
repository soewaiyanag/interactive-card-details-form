import { useSelector } from "react-redux";
import clsx from "clsx";
import formatCardNumber from "functions/formatCardNumber";

const allZero = "0".repeat(16);

const CardNumber = () => {
  const number = useSelector((state) => state.cardNumber.value);
  const formattedNumber = formatCardNumber(number || allZero);
  return (
    <span
      className={clsx(
        "font-light text-sm xs:text-base sm:text-[1.375rem] text-white",
        "tracking-widest mt-auto mb-5"
      )}
    >
      {formattedNumber}
    </span>
  );
};

export default CardNumber;
