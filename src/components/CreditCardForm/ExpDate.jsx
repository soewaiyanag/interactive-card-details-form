import { useSelector } from "react-redux";
import formatNumber from "functions/formatNumber";

const ExpDate = () => {
  const month = useSelector((state) => state.month.value) || "00";
  const year = useSelector((state) => state.year.value) || "00";
  const formattedMonth = formatNumber(month, 2);
  const formattedYear = formatNumber(year, 2);

  return (
    <span className="card-small-text">
      {formattedMonth + "/" + formattedYear}
    </span>
  );
};

export default ExpDate;
