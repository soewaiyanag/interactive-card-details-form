import CardHolderInput from "features/cardHolder/CardHolderInput";
import CardNumberInput from "features/cardNumber/CardNumberInput";
import CvcInput from "features/cvc/CvcInput";
import ExpDateInput from "components/CreditCardForm/ExpDateInput";
import Label from "components/CreditCardForm/Label";
import ConfirmBtn from "components/CreditCardForm/ConfirmBtn";

const SecondSection = () => {
  return (
    <div className="xl:max-w-md self-center">
      <form className="mt-12 sm:mt-24 md:mt-32 px-5 flex flex-col xl:mt-0">
        <Label htmlFor="card_holder">cardholder name</Label>
        <CardHolderInput placeholderName="Jane Appleseed" />
        <Label htmlFor={"card_number"}>card number</Label>
        <CardNumberInput />
        <div className="flex gap-4">
          <div>
            <p>
              EXP. DATE(
              <Label htmlFor="monthInput">MM</Label>/
              <Label htmlFor="yearInput">YY</Label>)
            </p>
            <ExpDateInput />
          </div>
          <div>
            <Label htmlFor="cvcInput">cvc</Label>
            <CvcInput />
          </div>
        </div>
        <ConfirmBtn />
      </form>
    </div>
  );
};

export default SecondSection;
