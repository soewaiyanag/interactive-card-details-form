import CreditCardFront from "@/components/CreditCard/CreditCardFront";
import CardBack from "@/components/CreditCard/CreditCardBack";
import clsx from "clsx";

const mobileCardFrontPosition = "left-4 top-1/2";
const mobileCardBackPosition = "right-5 top-7";

const FirstSection = () => {
  return (
    <div className={clsx("relative h-72", "lg:h-full")}>
      <div
        className={clsx(
          "lg:relative lg:grid lg:gap-8 lg:content-center lg:min-h-full"
        )}
      >
        <div
          className={clsx(
            mobileCardFrontPosition,
            "absolute z-10",
            "lg:relative lg:translate-x-1/4 lg:left-0 lg:top-0"
          )}
        >
          <CreditCardFront />
        </div>
        <div
          className={clsx(
            mobileCardBackPosition,
            "absolute",
            "lg:relative lg:translate-x-1/3 lg:top-0 lg:right-0"
          )}
        >
          <CardBack />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
