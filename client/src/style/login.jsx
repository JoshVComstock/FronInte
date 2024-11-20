import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

export const Izquierda = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
`;

export const LoginRight = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #F06724, #000);
  border-bottom-left-radius:25px;
`;

export const LoginBox = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative; 
`;

export const LoginImage = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1; 
`;

export const LoginTitle = styled.h1`
  font-size: 24px;
  color: #F06724;
  text-align: center;
  margin-bottom: 20px;
`;

export const DivFlavor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  position: relative;
  height: 100%; 
  width: 100%; 
  z-index: 2; 
`;

export const ImgFlavor = styled.img`
  width: 350px;
  height: auto;
  z-index: 2; 
  position: relative;
`;