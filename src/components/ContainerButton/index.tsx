// Button.tsx
import React from 'react';

type ButtonProps = {
  onClick: () => void;
  label: string;
  disabled?: boolean;
  link: string;
  className?: string;
  labelClassName?: string;
  
};

const Button: React.FC<ButtonProps> = ({ link, onClick, label, disabled = false, className, labelClassName }) => {
  return (
    <a href={link} >
      <button onClick={onClick} disabled={disabled} className={className}>
        <span className={labelClassName}>{label}</span>
      </button>
    </a>
   
  );
};

export default Button;

