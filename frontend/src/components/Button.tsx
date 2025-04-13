import React from 'react';
import  { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "solid" | "outline";
}

export const Button = ({ children, variant = "solid", ...props }: ButtonProps) => {
  const base =
    "px-6 py-2 rounded-md transition font-medium";
  const solid =
    "bg-emerald-500 text-white hover:bg-emerald-600";
  const outline =
    "border border-emerald-500 text-emerald-500 hover:bg-emerald-50";
  return (
    <button className={`${base} ${variant === "outline" ? outline : solid}`} {...props}>
      {children}
    </button>
  );
};