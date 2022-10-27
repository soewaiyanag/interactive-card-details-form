import { useSelector } from "react-redux";

const ExpDate = () => {
  const year = useSelector((state) => state.year.value);
  const month = useSelector((state) => state.month.value);
  return <span className="card-small-text">{month + "/" + year}</span>;
};

export default ExpDate;
