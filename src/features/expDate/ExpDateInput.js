import MonthInput from "./MonthInput";
import YearInput from "./YearInput";

const ExpDateInput = () => {
  return (
    <div className="flex gap-2.5">
      <MonthInput />
      <YearInput />
    </div>
  );
};

export default ExpDateInput;
