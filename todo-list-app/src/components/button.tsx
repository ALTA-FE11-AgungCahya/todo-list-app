import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

const Button: FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <button
      className="btn w-[90px] bg-sky-600 border-none tracking-wider transition ease-in delay-150 hover:bg-sky-300 hover:text-zinc-800 duration-300 mx-5 mt-5 normal-case"
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
