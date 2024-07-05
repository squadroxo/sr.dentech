// Button.tsx
import React from 'react';

type ButtonProps = {
  onClick: () => void;
  label: string;
  disabled?: boolean;
  link: string;
  
};

const Button: React.FC<ButtonProps> = ({ link, onClick, label, disabled = false }) => {
  return (
    <a href={link}>
         <button onClick={onClick} disabled={disabled}>
            {label}
        </button>
    </a>
   
  );
};

export default Button;

