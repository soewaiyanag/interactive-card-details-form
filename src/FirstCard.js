import clsx from "clsx";
import cardLogo from "./images/card-logo.svg";
import CardNumber from "./CardNumber";
import CardHolder from "./CardHolder";
import ExpDate from "./ExpDate";

const FirstCard = () => {
  return (
    <div
      className={clsx(
        "card bg-card-front ",
        "rounded-lg bg-cover flex flex-col"
      )}
    >
      <img className="w-16 sm:w-18" src={cardLogo} alt="card-logo" />
      <CardNumber />
      <div className="flex justify-between">
        <CardHolder />
        <ExpDate />
      </div>
    </div>
  );
};

export default FirstCard;
