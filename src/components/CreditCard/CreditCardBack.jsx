import clsx from "clsx";
import Cvc from "features/cvc/Cvc";

const CardBack = () => {
  return (
    <div className="card bg-card-back relative">
      <div
        className={clsx(
          "card-small-text",
          "absolute pb-0.5 right-10 top-1/2 -translate-y-1/2"
        )}
      >
        <Cvc />
      </div>
    </div>
  );
};

export default CardBack;
