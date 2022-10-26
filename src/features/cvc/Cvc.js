import { useSelector } from "react-redux";

const Cvc = () => {
  const value = useSelector((state) => state.cvc.value);
  return <span>{value}</span>;
};

export default Cvc;
