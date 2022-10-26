import { useSelector } from "react-redux";

const ExpDate = () => {
  const year = useSelector((state) => state.year.value) || "00";
  const month = useSelector((state) => state.month.value) || "00";
  console.log(year, month);
  return <span className="card-small-text">{month + "/" + year}</span>;
};

export default ExpDate;
