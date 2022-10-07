import CardHolderInput from "features/cardHolder/CardHolderInput";
import CardNumberInput from "features/cardNumber/CardNumberInput";
import ExpDateInput from "features/expDate/ExpDateInput";
import Label from "./Label";

const SecondSection = () => {
  return (
    <div className="sm:container">
      <form className="mt-32 px-5 flex flex-col">
        <Label htmlFor="cardHolder">cardholder name</Label>
        <CardHolderInput placeholderName="Jane Appleseed" />
        <Label htmlFor={"cardNumber"}>card number</Label>
        <CardNumberInput />
        <p>
          EXP. DATE(
          <Label htmlFor="monthInput">MM</Label>/
          <Label htmlFor="yearInput">YY</Label>)
        </p>
        <ExpDateInput />
      </form>
    </div>
  );
};

export default SecondSection;
