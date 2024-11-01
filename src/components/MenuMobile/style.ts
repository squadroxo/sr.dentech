import styled from "styled-components";
import { motion } from "framer-motion";

export const MenuContainer = styled(motion.ul)`
    display: flex;
    background-color: ${({theme}) => theme.colors.primary};
    flex-direction: column;
    position: absolute;
    top: 55px;
    right: 0;
    border-radius: 10px;
    padding: 1rem;
    gap: 0;
    margin: 10px 0 0 0;
    z-index: 50;
    transform-origin: top;
  
    .containerLinks__lista__item {
      font-family: ${({theme}) => theme.fonts.highlight};
      color: ${({theme}) => theme.colors.white100};
      font-weight: 700;
      line-height: 31.88px;
      text-decoration: none;
      font-size: 14px;
    }
`