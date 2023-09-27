import completeIcon from "images/icon-complete.svg";

const SuccessSection = () => {
  return (
    <div className="xl:w-80 self-center xl:ml-4">
      <img
        className="block mx-auto mb-4 w-14"
        src={completeIcon}
        alt="Complete Icon"
      />
      <section className="text-center space-y-2 mb-8">
        <h2 className="text-very-dark-violet font-medium tracking-widest text-xl">
          THANK YOU!
        </h2>
        <p className="text-sm text-dark-grayish-violet">
          We've added your card details
        </p>
      </section>
      <button
        className="block w-full mx-auto py-2.5 rounded-md bg-very-dark-violet text-white text-sm"
        type="button"
      >
        Continue
      </button>
    </div>
  );
};

export default SuccessSection;
