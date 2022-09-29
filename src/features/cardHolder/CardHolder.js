import { useSelector } from "react-redux";

const CardHolder = () => {
  const name = useSelector((state) => state.cardHolder.name);
  return <span className="card-small-text">{name || "JANE APPLESEED"}</span>;
};

export default CardHolder;
