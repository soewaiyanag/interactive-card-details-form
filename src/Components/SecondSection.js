import { CardHolderInput } from "features/cardHolder/CardHolder";
import { CardNumberInput } from "features/cardNumber/CardNumber";
import { ExpDateInput } from "features/expDate/ExpDate";

const SecondSection = () => {
  return (
    <div className="sm:container">
      <form className="mt-32 px-5 flex flex-col">
        <CardHolderInput />
        <CardNumberInput />
        <ExpDateInput />
      </form>
    </div>
  );
};

export default SecondSection;
