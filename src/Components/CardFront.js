import cardLogo from "images/card-logo.svg";
import CardNumber from "features/cardNumber/CardNumber";
import CardHolder from "features/cardHolder/CardHolder";
import ExpDate from "features/expDate/ExpDate";

const CardFront = () => {
  return (
    <div className="card bg-card-front flex flex-col">
      <img className="w-16 sm:w-18" src={cardLogo} alt="card-logo" />
      <CardNumber />
      <div className="flex justify-between">
        <CardHolder />
        <ExpDate />
      </div>
    </div>
  );
};

export default CardFront;
