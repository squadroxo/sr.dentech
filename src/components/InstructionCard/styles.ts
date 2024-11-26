import { motion } from "framer-motion";
import styled from "styled-components";

export const Section = styled(motion.section)`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;  
  row-gap: 16px;
  border: ${({ theme }) => `1px solid ${theme.colors.line}`};
  border-radius: 8px;
`;

export const Image = styled.img`
  width: 40px;
`;

export const Heading = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
`;

export const Content = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 12px;
  line-height: 14.4px;
`;