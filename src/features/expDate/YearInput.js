import NumberInput from "Components/NumberInput";
import { updateYear } from "./expDateSlice";

const YearInput = () => {
  const min = 0;
  const max = 99;

  return (
    <NumberInput
      min={min}
      max={max}
      action={updateYear}
      placeholder="YY"
      name="year"
      id="yearInput"
    />
  );
};

export default YearInput;
