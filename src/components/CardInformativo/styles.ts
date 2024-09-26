import styled from "styled-components";

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Kalam:wght@300;400;700&display=swap');
  width: 65%;
  height:auto;
  background-color: #267B80;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
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
    width: 90%;
  }
  .strutureDesktop{
    display:none
  }
  @media screen and (min-width: 1280px) and (max-width: 1366px) {
  .strutureDesktop{
    display: flex;
    gap: 5rem;
    border-radius: 10px;
  }
  .img{
    display: none;
  }
  .text{
    display: none;
  } 
  .textDesktop{
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    font-family: "Kalam", cursive;
    color: white;
    width: 90%;
  }

}
`