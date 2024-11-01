import styled from "styled-components";

interface CommonProps {
  // o prefixo $ é para evitar um warning do TypeScript
  // ver mais: https://styled-components.com/docs/api#transient-props
  $secondary?: boolean;
}

export const ButtonLink = styled.a`
  text-decoration: none;
`;

export const Button = styled.button<CommonProps>`
  width: ${({ $secondary }) => $secondary ? '13.63rem' : '12.13rem'};
  padding: ${({ $secondary }) => $secondary ? '0.63rem 1.5rem' : '0.42rem'};
  border: none;
  cursor: pointer;
  border-radius: 20px;
  background-color: ${({ theme, $secondary }) => (
    $secondary ? theme.colors.secondary : theme.colors.tertiary
  )};
  filter: ${({ $secondary }) => (
    $secondary
      ? 'drop-shadow(0 0 7.22px rgba(0,0,0,.25))'
      : 'drop-shadow(0 0 6.67px rgba(0,0,0,.15))'
  )};
  transition: 
    transform 0.1s ease, 
    background-color 0.1s ease;  

  &:hover {
      background-color: ${({ theme, $secondary }) => (
    $secondary ? theme.colors.tertiary : theme.colors.primary)};
      transform: scale(1.05);
  }  

  /* TODO: adicionar estilos para telas maiores */
`;

export const Label = styled.span<CommonProps>`
  font-size: ${({ $secondary }) => $secondary ? '1rem' : '0.88rem'};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white100};
  font-family: ${({ theme }) => theme.fonts.highlight};
  line-height: ${({ $secondary }) => $secondary ? '19.2px' : '22px'};

  /* TODO: adicionar estilos para telas maiores */
`;