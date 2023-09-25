import CreditCardFront from "@/components/CreditCard/CreditCardFront";
import CreditCardBack from "@/components/CreditCard/CreditCardBack";
import clsx from "clsx";

const FirstSection = () => {
  return (
    <div className={clsx("relative h-72 xl:h-full")}>
      <div
        className={clsx(
          "mt-6 grid grid-cols-7 grid-rows-[105px_auto]",
          "xs:grid-cols-5 xs:grid-rows-[127px_auto]",
          "xl:relative xl:gap-8 xl:content-center xl:min-h-full"
        )}
      >
        <div
          className={clsx(
            "z-10",
            "col-start-1 col-end-[-1] row-start-2",
            "xxs:col-start-1 xxs:col-end-7",
            "xs:row-start-2 xs:col-end-4",
            "xl:relative xl:translate-x-1/4 xl:top-0 xl:left-[calc(100%-calc(20vw+18rem))]"
          )}
        >
          <CreditCardFront />
        </div>
        <div
          className={clsx(
            "col-start-1 col-end-[-1] row-start-1",
            "xxs:col-start-2 xxs:col-end-8",
            "xs:col-start-3 xs:row-start-1 xs:col-end-6",
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
