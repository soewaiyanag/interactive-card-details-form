import { useSelector } from "react-redux";
import formatNumber from "functions/formatNumber";

const Cvc = () => {
  const value = useSelector((state) => state.cvc.value) || "000";
  const formattedValue = formatNumber(value, 3);
  return <span>{formattedValue}</span>;
};

export default Cvc;
