interface ButtonText {
  text: string;
}

function Button({ text }: ButtonText) {
  return (
    <button className="flex justify-center items-center w-full h-14 rounded-xl  bg-menu-color1 cursor-pointer">
      <span className="font-semibold">{text}</span>
    </button>
  );
}

export default Button;
