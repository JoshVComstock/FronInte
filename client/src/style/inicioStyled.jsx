import styled from "styled-components";
import { Colors } from "./colors";

export const Container = styled.div`
  width: auto;
  height: 700px;
`;

export const Header = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  padding: 0 5%;
  justify-content: center;
`;

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 32px;
  color: ${Colors.primary400};
  
  div {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    
    h1 {
      font-size: 28px;
      font-weight: bold;
      color: ${Colors.primary400};
    }
    
    p {
      font-size: 16px;
      font-weight: bold;
      color: ${Colors.primary400};
    }
  }
`;

export const Main = styled.div`
  width: 100%;
  height: auto;
  margin-top: 20px;
`;

export const FacultadesNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 15px;
`;

export const FacultadButton = styled.button`
  width: 80px;
  height: 36px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 14px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  
  ${props => props.active ? `
    background-color: ${Colors.primary400};
    color: ${Colors.white};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    transform: scale(1.03);
  ` : `
    background-color: ${Colors.white};
    color: ${Colors.primary400};
    &:hover {
      background-color: ${Colors.secundary700};
      color: ${Colors.primary400};
    }
  `}
`;

export const ProyectosGrid = styled.div`
  width: 100%;
  height: 545px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  padding: 10px 0;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ProyectoCard = styled.div`
  width: 100%;
  height: 355px;
  background: ${Colors.white};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
  }
`;

export const ProyectoImagen = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
`;

export const ProyectoContent = styled.div`
  padding: 12px;
`;

export const ProyectoTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  color: ${Colors.black};
`;

export const TipoProyecto = styled.div`
  width: 110px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 13px;
  font-size: 11px;
  font-weight: bold;

  ${props => {
    switch(props.tipo) {
      case 'Individual':
        return 'background-color: #dbeafe; color: #1d4ed8;';
      case 'Grupal':
        return 'background-color: #dcfce7; color: #15803d;';
      default:
        return 'background-color: #f3e8ff; color: #7e22ce;';
    }
  }}
`;

export const InfoGrid = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin: 10px 0;
`;

export const InfoBox = styled.div`
  width: calc(50% - 5px);
  height: 90px;
  background: ${props => props.type === 'materia' ? Colors.primary400 : Colors.white};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 10px;

  h3 {
    color: ${props => props.type === 'materia' ? Colors.white : Colors.gray200};
    font-weight: bold;
    font-size: 13px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  p {
    padding-top: 4px;
    color: ${props => props.type === 'materia' ? Colors.white : Colors.gray200};    
    font-size: 11px;
    text-align: center;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-top: 4px;
    font-size: 11px;
    list-style: none;
    color: ${props => props.type === 'materia' ? Colors.white : Colors.gray200};
  }
`;

export const DocentesSection = styled.div`  
  width: 100%;
  margin-top: 10px;
  
  h3 {
    color: ${Colors.gray200};
    font-weight: bold;
    font-size: 13px;
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

export const DocentesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

export const DocenteTag = styled.div`
  padding: 8px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${Colors.white};
  color: ${Colors.black};
  border-radius: 10px;
  font-size: 11px;
`;

export const ProyectoTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
`;

export const StarsRow = styled.div`
  display: flex;
  gap: 3px;
  
  svg {
    width: 16px;
    height: 16px;
    fill: ${Colors.primary400};
  }
`;