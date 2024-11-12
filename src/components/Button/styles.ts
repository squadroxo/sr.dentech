import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";

interface CommonProps {
  // o prefixo $ é para evitar um warning do TypeScript
  // ver mais: https://styled-components.com/docs/api#transient-props
  $secondary?: boolean;
  disabled?: boolean;
}

export const Button = styled(Link)<LinkProps & CommonProps>`
  text-decoration: none;
  text-align: center;
  width: ${({ $secondary }) => $secondary ? '218px' : '194px'};
  padding: ${({ $secondary }) => $secondary ? '10px 24px' : '7px'};
  border: none;
  border-radius: 20px;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  background-color: ${({ theme, disabled, $secondary }) => {
    if (disabled) return theme.colors.bgDisabled;
    return $secondary ? theme.colors.secondary : theme.colors.tertiary;
  }};
  filter: ${({ disabled, $secondary }) => {
    if (disabled) return 'none';
    return $secondary
      ? 'drop-shadow(0 0 7.22px rgba(0,0,0,.25))'
      : 'drop-shadow(0 0 6.67px rgba(0,0,0,.15))'
  }};
  transition: 
    transform 0.1s ease, 
    background-color 0.1s ease;  

  &:hover {
    background-color: ${({ theme, disabled, $secondary }) => {
    if (disabled) return theme.colors.bgDisabled;
    return $secondary ? theme.colors.hoverSecondary : theme.colors.hoverPrimary
  }};
    transform: ${({ disabled }) => disabled ? 'none' : 'scale(1.05)'};
  }

  &:active {
    background-color: ${({ theme, disabled, $secondary }) => {
    if (disabled) return theme.colors.bgDisabled;
    return $secondary ? theme.colors.pressedSecondary : theme.colors.pressedPrimary
  }};
  }

  @media screen and (min-width: 768px) {
    width: 218px;
    padding: 10px 24px;
    filter: ${({ disabled }) => disabled ? 'none' : 'drop-shadow(0 0 7.22px rgba(0,0,0,.25))'};
  }
`;

export const Label = styled.span<CommonProps>`
  font-size: ${({ $secondary }) => $secondary ? '16px' : '14px'};
  font-weight: 700;
  color: ${({ theme, disabled }) => (
    disabled ? theme.colors.textDisabled : theme.colors.white100
  )};
  font-family: ${({ theme }) => theme.fonts.highlight};
  line-height: ${({ $secondary }) => $secondary ? '19px' : '22px'};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 19px;
  }
`;