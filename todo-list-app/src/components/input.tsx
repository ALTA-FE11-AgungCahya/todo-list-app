import { FC, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

export const Input: FC<Props> = ({ label, id, ...props }) => {
  return (
    <div>
      <input
        id={id}
        placeholder="What do you want to do ?"
        className="input input-bordered w-[90%] mx-2 ml-5"
        {...props}
      />
      <label className="label p-0 pt-1 px-2 pl-5">
        <span className="label-text-alt text-zinc-500 text-[14px]">
          {label}
        </span>
      </label>
    </div>
  );
};
