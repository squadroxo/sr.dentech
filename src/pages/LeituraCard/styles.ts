import { motion } from "framer-motion";
import styled from "styled-components";

export const Article = styled(motion.article)`
  padding: 16px 40px 32px;
`;

export const Instructions = styled(motion.article)`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  h2 {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
  }

  p {
    font-size: 12px;
    line-height: 14.4px;
  }
`;

export const Line = styled.span`
  display: block;
  border-top: 1px solid ${({ theme }) => theme.colors.line};
  margin: 0 40px;
`;

export const SeeMore = styled(motion.article)`
  padding: 32px 40px;

  h2 {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    margin-bottom: 24px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;