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
`