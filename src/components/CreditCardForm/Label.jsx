const Label = ({ htmlFor, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="uppercase mb-2 mt-4 inline-block text-sm"
    >
      {children}
    </label>
  );
};

export default Label;
