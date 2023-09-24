const Label = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="uppercase mb-1 inline-block text-sm">
      {children}
    </label>
  );
};

export default Label;
