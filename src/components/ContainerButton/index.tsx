import React from 'react';

type ButtonProps = {
  onClick?: () => void;
  label: string;
  target?: string;
  disabled?: boolean;
  link: string;
  className?: string;
  labelClassName?: string;
  primario: boolean
};

const Button: React.FC<ButtonProps> = ({ link,target, onClick, label, disabled = false, className, labelClassName, primario }) => {
  if (primario) {
    return (
      <a href={link} target={target}>
        <button onClick={onClick} disabled={disabled} className={className}>
          <span className={labelClassName}>{label}</span>
        </button>
      </a>
    )
  } else {
    return (
      <a href={link} target={target}>
        <button onClick={onClick} disabled={disabled} className={className}>
          <span className={labelClassName}>{label}</span>
        </button>
      </a>
    )
  }
};

export default Button;

