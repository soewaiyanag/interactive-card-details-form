import NumberInput from "components/CreditCardForm/NumberInput";
import { update } from "./cvcSlice";

const CvcInput = () => {
  return (
    <NumberInput
      placeholder="e.g. 123"
      name="cvc"
      id="cvcInput"
      maxLength="3"
      action={update}
    />
  );
};

export default CvcInput;
