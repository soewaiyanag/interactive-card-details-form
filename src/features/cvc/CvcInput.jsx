import NumberInput from "components/NumberInput";
import { update } from "./cvcSlice";

const CvcInput = () => {
  const min = 0;
  const max = 999;

  return (
    <NumberInput
      min={min}
      max={max}
      placeholder="e.g. 123"
      name="cvc"
      id="cvcInput"
      action={update}
    />
  );
};

export default CvcInput;
