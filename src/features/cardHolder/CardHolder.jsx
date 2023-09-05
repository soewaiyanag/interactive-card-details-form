import { useSelector } from "react-redux";

const CardHolder = ({ placeHolderName }) => {
  const name = useSelector((state) => state.cardHolder.name);
  return (
    <span className="card-small-text uppercase">{name || placeHolderName}</span>
  );
};

export default CardHolder;
