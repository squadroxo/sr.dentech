// Button.tsx
import React from 'react';
import styles from "./button.module.scss";

type ButtonProps = {
  onClick: () => void;
  label: string;
  disabled?: boolean;
  link: string;
  className?: string;
  labelClassName?: string;
  primario: boolean
};

const Button: React.FC<ButtonProps> = ({ link, onClick, label, disabled = false, className, labelClassName, primario }) => {
  if (primario) {
    return (
      <a href={link}>
        <button onClick={onClick} disabled={disabled} className={className}>
          <span className={labelClassName}>{label}</span>
        </button>
      </a>
    )
  } else {
    return (
      <a href={link}>
        <button onClick={onClick} disabled={disabled} className={className}>
          <span className={labelClassName}>{label}</span>
        </button>
      </a>
    )
  }
};

export default Button;

