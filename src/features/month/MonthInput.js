import NumberInput from "Components/NumberInput";
import { update } from "./monthSlice";

const MonthInput = () => {
  const min = 0;
  const max = 12;

  return (
    <NumberInput
      min={min}
      max={max}
      placeholder="MM"
      name="month"
      id="monthInput"
      action={update}
    />
  );
};

export default MonthInput;
