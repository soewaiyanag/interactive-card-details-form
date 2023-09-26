import NumberInput from "components/CreditCardForm/NumberInput";
import { update } from "./yearSlice";

const YearInput = () => {
  return (
    <NumberInput
      placeholder="YY"
      name="year"
      id="yearInput"
      maxLength="2"
      action={update}
    />
  );
};

export default YearInput;
