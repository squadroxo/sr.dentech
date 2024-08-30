import styled from "styled-components";

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Kalam:wght@300;400;700&display=swap');
  width: 280px;
  height: 171px;
  background-color: #267B80;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border-radius: 10px;
  margin: 48px auto;
  padding: 17px 32px;

  .img{

  }

  .text{
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    font-family: "Kalam", cursive;
    color: white;
    width: 73%;
  }
`