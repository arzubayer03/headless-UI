import { forwardRef } from "react";
import { classNames } from "../utils/classNames"; 

const variantStyles = {
  primary: "bg-indigo-500 hover:bg-indigo-600 text-white",
  secondary: "bg-gray-700 hover:bg-gray-800 text-white",
  outline: "border border-gray-500 text-gray-700 hover:bg-gray-100",
  danger: "bg-red-500 hover:bg-red-600 text-white",
  headless: "inline-flex items-center gap-2 rounded bg-gray-700 border border-pink-500 py-1.5 px-3 text-sm font-semibold text-white focus:outline-none hover:bg-gray-600 open:bg-gray-700 focus:outline-1 focus:outline-white"
};

const Button = forwardRef(({ variant = "primary", className, as: Component = "button", ...props }, ref) => {
  return (
    <Component
      ref={ref}
      className={classNames(
        "px-4 py-2 rounded-lg font-medium transition duration-300",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
});

export default Button;

