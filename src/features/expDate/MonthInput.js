import NumberInput from "Components/NumberInput";
import { updateMonth } from "./expDateSlice";

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
      action={updateMonth}
    />
  );
};

export default MonthInput;
