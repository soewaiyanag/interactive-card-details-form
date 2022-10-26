import NumberInput from "Components/NumberInput";
import { updateYear } from "./expDateSlice";

const YearInput = () => {
  const min = 0;
  const max = 99;

  return (
    <NumberInput
      min={min}
      max={max}
      placeholder="YY"
      name="year"
      id="yearInput"
      action={updateYear}
    />
  );
};

export default YearInput;
