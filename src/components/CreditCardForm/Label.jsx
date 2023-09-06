const Label = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="uppercase">
      {children}
    </label>
  );
};

export default Label;
