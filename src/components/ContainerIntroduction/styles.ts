import styled from "styled-components";
import { motion } from "framer-motion";

export const Article = styled(motion.article)`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 24px;
  padding: 40px;
  font-family: ${({ theme }) => theme.fonts.primary};

  @media screen and (min-width: 768px) {
    padding-bottom: 52px;
    flex-direction: row-reverse;
    column-gap: 30px;
  }

  @media screen and (min-width: 950px) {
    column-gap: 16px;
  }
`;

export const ImageSet = styled.picture`
  img {      
    width: 264px;

    @media screen and (min-width: 768px) {
      width: 320px;
    }

    @media screen and (min-width: 950px) {
      width: 452px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-items: center;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    max-width: 452px;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.primary};

  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 45.6px;
  }

  @media screen and (min-width: 950px) {
    font-size: 38px;
    line-height: 45.6px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  line-height: 16px;
  text-align: center;
  margin-bottom: 8px;
  
  span{
    font-weight: 700;
  }

  @media screen and (min-width: 768px) {
    line-height: 24px;
    text-align: left;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 950px) {
    font-size: 16px;
  }
`;