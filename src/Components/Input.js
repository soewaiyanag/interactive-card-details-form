const Input = ({ children, ...props }) => {
  return (
    <input {...props} className="border border-black rounded-md py-2 px-4">
      {children}
    </input>
  );
};

export default Input;
