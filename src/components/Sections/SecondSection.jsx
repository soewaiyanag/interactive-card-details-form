import CardHolderInput from "features/cardHolder/CardHolderInput";
import CardNumberInput from "features/cardNumber/CardNumberInput";
import CvcInput from "features/cvc/CvcInput";
import ExpDateInput from "components/CreditCardForm/ExpDateInput";
import Label from "components/CreditCardForm/Label";
import ConfirmBtn from "components/CreditCardForm/ConfirmBtn";

const SecondSection = () => {
  return (
    <div className="lg:max-w-md self-center">
      <form className="mt-32 px-5 flex flex-col lg:mt-0">
        <Label htmlFor="card_holder">cardholder name</Label>
        <CardHolderInput placeholderName="Jane Appleseed" />
        <Label htmlFor={"card_number"}>card number</Label>
        <CardNumberInput />
        <p>
          EXP. DATE(
          <Label htmlFor="monthInput">MM</Label>/
          <Label htmlFor="yearInput">YY</Label>)
        </p>
        <div className="flex gap-4">
          <ExpDateInput />
          <CvcInput />
        </div>
        <ConfirmBtn />
      </form>
    </div>
  );
};

export default SecondSection;
