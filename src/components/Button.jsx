import React from "react";
/**
 * Custom Button Implementations with inherit of native button
 * @param {React.HTMLAttributes<HTMLButtonElement>} props HTML BUTTON ATTRIBUTS
 * @param {React.ReactElement} props.children React Elemen
 * @param {string | undefined} props.className String of CSS CLass Name
 * @param {'primary'|"secondary"}props.variant
 */
export default function Button({ children, className, ...props }) {
  return (
    <button
      className={` flex items-center justify-center px-4 py-3 text-center rounded-full 
      font-lg ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
