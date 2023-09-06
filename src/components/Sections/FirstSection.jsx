import CardFront from "components/CreditCard/CreditCardFront";
import CardBack from "components/CreditCard/CreditCardBack";
import clsx from "clsx";

const FirstSection = () => {
  return (
    <div
      className={clsx(
        "bg-main-mobile md:bg-main-desktop h-68 bg-cover",
        "relative"
      )}
    >
      <div className="sm:container absolute inset-0">
        <div className="absolute left-0 pl-5 top-1/2 z-10">
          <CardFront />
        </div>
        <div className="absolute right-0 pr-5 top-7">
          <CardBack />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
