import CardFront from "components/CreditCard/CreditCardFront";
import CardBack from "components/CreditCard/CreditCardBack";
import clsx from "clsx";

const mobileCardFrontPosition = "left-4 top-1/2";
const mobileCardBackPosition = "right-5 top-7";

const FirstSection = () => {
  return (
    <div
      className={clsx(
        "bg-main-mobile h-68 bg-cover bg-no-repeat relative",
        "md:bg-main-desktop md:min-h-full md:bg-[length:65%]"
      )}
    >
      <div
        className={clsx(
          "absolute inset-0",
          "md:relative md:grid md:gap-8 md:content-center md:min-h-full"
        )}
      >
        <div
          className={clsx(
            mobileCardFrontPosition,
            "absolute z-10",
            "md:relative md:translate-x-1/4 md:left-0 md:top-0"
          )}
        >
          <CardFront />
        </div>
        <div
          className={clsx(
            mobileCardBackPosition,
            "absolute",
            "md:relative md:translate-x-1/3 md:top-0 md:right-0"
          )}
        >
          <CardBack />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
