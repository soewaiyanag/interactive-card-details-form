import cardLogo from "@/images/card-logo.svg";
import CardNumber from "@/features/cardNumber/CardNumber";
import CardHolder from "@/features/cardHolder/CardHolder";
import ExpDate from "@/components/CreditCardForm/ExpDate";

const CreditCardFront = () => {
  return (
    <div className="card bg-card-front flex flex-col relative">
      <img className="w-12 xs:w-16 sm:w-18" src={cardLogo} alt="card-logo" />
      <CardNumber />
      <div className="flex justify-between">
        <CardHolder placeHolderName="Jane Appleseed" />
        <ExpDate />
      </div>
    </div>
  );
};

export default CreditCardFront;
