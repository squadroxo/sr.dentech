import { motion } from "framer-motion";
import styled from "styled-components";

export const Footer = styled(motion.footer)`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 100%;
  border-radius: 15px 15px 0px 0px !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0;

  .container__contato {
    color: ${({ theme }) => theme.colors.white100};
    display: block;
    font-size: 14px;
    font-weight: 400;
    line-height: 24.2px;
    height: 17px;

    a {
      font-weight: 700;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.white90};
    }
  }

  .container__contSec {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;

    .container__connSec__content {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 24px;
      height: 72px;
    }

    .container__contSec__txt {
      color: ${({ theme }) => theme.colors.white100};
      font-weight: 400;
      font-size: 14px;
      text-align: center;
      line-height: 16.94px;
      width: 153px;
      height: 51px;
      text-align: justify;
    }

    .container__socialmedia {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .container__socialmedia__txt {
      color: ${({ theme }) => theme.colors.white100};
      font-weight: 500;
      font-size: 14px;
      width: 173px;
      height: 17px;
      line-height: 16.94px;
      text-align: center;
    }
  
    .container__socialmidia__icones {
      display: flex;
      justify-content: center;
      gap: 9.72px;

      img {
        border-radius: 5px;
        width: 32px;
        height: 32px;
      }
    }

  }
` 