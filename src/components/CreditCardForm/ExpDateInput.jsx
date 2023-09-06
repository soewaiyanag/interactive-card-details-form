import MonthInput from "features/month/MonthInput";
import YearInput from "features/year/YearInput";

const ExpDateInput = () => {
  return (
    <div className="flex gap-2.5">
      <MonthInput />
      <YearInput />
    </div>
  );
};

export default ExpDateInput;
