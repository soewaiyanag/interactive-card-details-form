import NumberInput from "components/CreditCardForm/NumberInput";
import { update } from "./monthSlice";

const MonthInput = () => {
  return (
    <NumberInput
      placeholder="MM"
      name="month"
      id="monthInput"
      maxLength="2"
      action={update}
    />
  );
};

export default MonthInput;
