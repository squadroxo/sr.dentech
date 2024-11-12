import * as Styles from './styles';

type ButtonProps = {
  link: string;
  target?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  label: string;
  labelClassName?: string;
  secondary?: boolean;
};

const Button = ({
  link,
  target,
  onClick,
  disabled = false,
  className,
  label,
  labelClassName,
  secondary = false,
}: ButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (disabled) e.preventDefault();
    else onClick && onClick();
  }
  return (
    <Styles.Button
      to={link}
      target={target}
      onClick={handleClick}
      className={className}
      disabled={disabled}
      $secondary={secondary}
    >
      <Styles.Label
        className={labelClassName}
        disabled={disabled}
        $secondary={secondary}
      >
        {label}
      </Styles.Label>
    </Styles.Button>
  )
};

export default Button;