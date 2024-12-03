import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 32px;
  
  .container__subtitle {
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary};
  }

  .container__text {
    font-size: 12px;
    ${({ theme }) => theme.colors.text};
  }
`