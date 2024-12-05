import styled from "styled-components";

export const Section = styled.section`
  padding: 16px;
  display: flex;
  column-gap: 16px;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.07);

  img {
    width: 85px;
    height: 93px;    
    object-fit: cover;
    object-position: center;
    flex-shrink: 0;
    border-radius: 8px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  h3 {
    font-family: ${({ theme }) => theme.fonts.lato};
    font-size: 14px;
    font-weight: 800;
    line-height: 17px;
    color: ${({ theme }) => theme.colors.tertiary};
  }

  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    font-family: ${({ theme }) => theme.fonts.lato};
    font-size: 12px;
    line-height: 14.4px;
  }
`;