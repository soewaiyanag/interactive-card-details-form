import { CardNumberInput } from "features/cardNumber/CardNumber";

const SecondSection = () => {
  return (
    <div className="sm:container">
      <form className="mt-32 px-5 flex flex-col">
        <label htmlFor="cardNumber" className="uppercase">
          cardholder name
        </label>
        <input
          className="border border-black rounded-md py-2 px-4"
          placeholder="e.g. Jane Appleseed"
          type="text"
          name="cardNumber"
          id="cardNumber"
        />
        <CardNumberInput />
      </form>
    </div>
  );
};

export default SecondSection;
