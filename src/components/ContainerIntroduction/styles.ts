import styled from "styled-components";
import { motion } from "framer-motion";

export const Article = styled(motion.article)`
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 1.5rem;
    margin: 2.5rem;
    font-family: ${({ theme }) => theme.fonts.primary};

    /* 
        TODO: solução alternativa criada para não mostrar o conteúdo Web. 
        Alterar quando estiver fazendo a task de refatoração web.
    */
    @media screen and (min-width: 500px) {
        display: none;
    }
`;

export const Image = styled.img`
    width: 264px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
`;

export const Text = styled.p`
    font-size: .875rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 400;
    line-height: 1rem;
    text-align: center;
    
    span{
        font-weight: 700;
    }
`;