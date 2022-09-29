import { useSelector } from "react-redux";

const ExpDate = () => {
  const date = useSelector((state) => state.expDate);
  const month = date.month || "00";
  const year = date.year || "00";
  return <span className="card-small-text">{month + "/" + year}</span>;
};

export default ExpDate;
