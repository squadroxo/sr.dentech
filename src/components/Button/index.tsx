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

/**
 * Um botão renderizado dentro de um elemento âncora. As props link (href) 
 * e target são passadas ao elemento âncora. As props onClick, disabled e 
 * className são passadas para o elemento de botão. A prop label renderiza 
 * o texto do botão e estilos adicionais podem ser aplicados pela prop 
 * labelClassName.
 * 
 * Um tema secundário é aplicado quando a prop secondary é true.
 * 
 * Props disabled e secondary são false por padrão.
 */
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
  return (
    <Styles.ButtonLink href={link} target={target}>
      <Styles.Button
        onClick={onClick}
        disabled={disabled}
        className={className}
        $secondary={secondary}
      >
        <Styles.Label
          className={labelClassName}
          $secondary={secondary}
        >
          {label}
        </Styles.Label>
      </Styles.Button>
    </Styles.ButtonLink>
  )
};

export default Button;