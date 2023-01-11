import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

const Button: FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <button
      className=" w-[90px] h-9 rounded-xl text-zinc-50 bg-sky-600 border-none tracking-wider normal-case"
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
