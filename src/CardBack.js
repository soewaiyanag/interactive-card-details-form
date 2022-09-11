import clsx from "clsx";

const CardBack = () => {
  return (
    <div className="card bg-card-back relative">
      <span
        className={clsx(
          "card-small-text",
          "absolute pb-0.5 right-10 top-1/2 -translate-y-1/2"
        )}
      >
        000
      </span>
    </div>
  );
};

export default CardBack;
