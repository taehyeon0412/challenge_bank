interface ButtonText {
  text: string;
  type: any;
}

function Button({ text, type }: ButtonText) {
  return (
    <button
      type={type}
      className="flex justify-center items-center w-full h-14 rounded-xl  bg-menu-color1 cursor-pointer"
    >
      <span className="font-semibold">{text}</span>
    </button>
  );
}

export default Button;
