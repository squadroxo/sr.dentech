import { motion } from "framer-motion";
import styled from "styled-components";

export const Home = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  overflow-x: hidden;
`;