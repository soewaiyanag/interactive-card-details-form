import NumberInput from "components/NumberInput";
import { update } from "./yearSlice";

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
      action={update}
    />
  );
};

export default YearInput;
