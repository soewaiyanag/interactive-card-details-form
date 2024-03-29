import CardHolderInput from "features/cardHolder/CardHolderInput";
import CardNumberInput from "features/cardNumber/CardNumberInput";
import CvcInput from "features/cvc/CvcInput";
import ExpDateInput from "components/CreditCardForm/ExpDateInput";
import Label from "components/CreditCardForm/Label";
import ConfirmBtn from "components/CreditCardForm/ConfirmBtn";

const SecondSection = () => {
  return (
    <div className="xl:max-w-sm self-center xl:ml-4">
      <form className="mt-12 sm:mt-24 md:mt-32 px-5 flex flex-col xl:mt-0">
        <div className="mb-8">
          <div>
            <Label htmlFor="cardHolder">cardholder name</Label>
            <CardHolderInput placeholderName="Jane Appleseed" />
          </div>
          <div>
            <Label htmlFor={"cardNumber"}>card number</Label>
            <CardNumberInput />
          </div>
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
        </div>
        <ConfirmBtn />
      </form>
    </div>
  );
};

export default SecondSection;
