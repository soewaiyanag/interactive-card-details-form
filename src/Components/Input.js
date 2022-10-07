const Input = ({ children, ...props }) => {
  return (
    <input
      {...props}
      className="border border-black rounded-md py-2 px-4 w-full"
    >
      {children}
    </input>
  );
};

export default Input;
