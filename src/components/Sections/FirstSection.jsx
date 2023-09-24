import CreditCardFront from "@/components/CreditCard/CreditCardFront";
import CreditCardBack from "@/components/CreditCard/CreditCardBack";
import clsx from "clsx";

const mobileCardFrontPosition = "left-4 top-1/2";
const mobileCardBackPosition = "right-5 top-7";

const FirstSection = () => {
  return (
    <div className={clsx("relative h-72", "xl:h-full")}>
      <div
        className={clsx(
          "xl:relative xl:grid xl:gap-8 xl:content-center xl:min-h-full"
        )}
      >
        <div
          className={clsx(
            mobileCardFrontPosition,
            "absolute z-10 w-fit",
            "xl:relative xl:translate-x-1/4 xl:top-0 xl:left-[calc(100%-calc(20vw+18rem))]"
          )}
        >
          <CreditCardFront />
        </div>
        <div
          className={clsx(
            mobileCardBackPosition,
            "absolute w-fit",
            "xl:relative xl:translate-x-1/3 xl:top-0 xl:left-[calc(100%-calc(20vw+15rem))]"
          )}
        >
          <CreditCardBack />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
