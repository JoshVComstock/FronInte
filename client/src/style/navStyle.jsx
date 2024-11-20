import styled from "styled-components";
import { Colors } from "./colors";
import { Link } from "react-router-dom";

export const ContainerPadre = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const Container = styled.div`
  width: 350px; 
  height: 100vh; 
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${Colors.white};
  border-radius: 0 15px 15px 0; 
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); 
`;

export const LogoContainer = styled.div`
  width: 100%; 
  height: 20%; 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px; 
`;

export const LogoIcon = styled.div`
  width: 60px; 
  height: 60px;
  background: ${Colors.primary400};
  border-radius: 50%; 
  margin-bottom: 10px; 
`;

export const LogoText = styled.h1`
  font-size: 24px;
  color: black;
  font-weight: bold;
`;

export const DivI = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content:center;
    align-items:center;
    border-radius: 10px;
    background: ${Colors.primary400};
`;

export const NavItems = styled.div`
  width: 100%;
  height: 80%; 
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  gap: 10px;
`;

export const NavItem = styled(Link)`
  width: 90%; 
  height: 70px;
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 10px;
  background: #f8f8f8;
  border-radius: 10px;
  cursor: pointer;
  color: #333;
  padding-left: 10px;
  transition: background 0.3s;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); 

  &:hover {
    background: #ffeeba;
  }

  svg {
    font-size: 20px;
    color: ${Colors.white};
  }
`;

export const DivOutlet = styled.div`
  width: calc(100% - 250px);
  padding: 20px;
`;
