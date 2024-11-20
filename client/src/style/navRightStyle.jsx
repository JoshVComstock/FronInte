import styled from "styled-components";
import { Colors } from "./colors";

export const ContenedorNavegacion = styled.div`
  width: ${(props) => (props.visible ? '400px' : '0px')}; 
  background: ${Colors.white};
  padding: 15px;
  box-shadow: -2px 0 5px rgba(0,0,0,0.1);
  display: ${(props) => (props.visible ? 'block' : 'none')};
  flex-direction: column;
  align-items: center;
  border-radius: 15px 0px 0px 15px;
  transition: 0.5s; 
  overflow: hidden; 
`;

export const ContenedorPerfil = styled.div`
  width: 100%; 
  height: 25%; 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const DivButtonNav = styled.div`
  width: auto; 
  height: 25px; 
  position: relative;
  display: flex;
  justify-content:center;
  border-radius: 5px;
  background:${Colors.primary400};
  box-shadow: 2px 2px 3px rgba(70, 66, 66, 0.297);
  top: 45px;
  right:10px;
`;

export const BottonNav = styled.button`
  font-size: 25px;
  color: ${Colors.white}; 
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const ImagenPerfil = styled.div`
  width: 70px; 
  height: 70px;
  background: ${Colors.primary400};
  border-radius: 50%; 
  margin-bottom: 15px; 
`;

export const NombrePerfil = styled.h3`
  font-size: 16px;
  color: ${Colors.black};
  margin-bottom: 10px;
`;

export const RolPerfil = styled.p`
  font-size: 14px;
  color: ${Colors.black};
  margin-bottom: 10px;
`;

export const ContenedorCalendario = styled.div`
  width: 100%;
  background: ${Colors.white};
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  overflow-y: hidden; 

  .rbc-month-view {
    border: none; 
  }

  .rbc-header {
    color: #fbc02d !important; 
    font-weight: bold;
    font-size: 14px;
    padding-top: 5px;
    padding-bottom: 5px; 
    text-align: center;
    border: none !important;
    text-transform: uppercase;
  }

  .rbc-month-row,
  .rbc-day-bg,
  .rbc-date-cell {
    border: none !important;
  }

  .rbc-selected {
    background-color: transparent !important;
  }

  .rbc-event {
    background-color: transparent !important;
  }

  .rbc-day-slot {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ContenedorRecordatorios = styled.div`
  width: 100%;
  height: 157px; 
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  overflow-y: auto;
  margin-top: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TituloRecordatorio = styled.div`
  width: 100%;
  height: 30px; 
  display: flex;
  font-weight: bold;
  align-items: center;
  margin-top: 10px;
`;

export const ItemRecordatorio = styled.div`
  width: 100%;
  height: 60px; 
  display: flex;
  align-items: center;
`;

export const IconoRecordatorio = styled.div`
  width: 30px; 
  height: 30px;
  background: #ffd966;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: ${Colors.white};
  margin-right: 8px;
`;

export const DivTexto = styled.div`
  width: 220px; 
  max-height: 100px;
  display: flex;
  flex-direction: column;
  font-weight: bold;
`;

export const TextoRecordatorio = styled.div`
  font-size: 12px;
  color: ${Colors.black};
  font-weight: bold;
  white-space: normal;
`;

export const TextoDescripcion = styled.div`
  font-size: 12px;
  color: ${Colors.gray100};
  font-weight: bold;
  white-space: normal;
`;

export const ContenedorHerramientas = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const BotonNavegacion = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #fbc02d;
  cursor: pointer;

  &:hover {
    color: #f57f17;
  }
`;

export const EtiquetaMesAno = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const ContenedorDia = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CirculoDia = styled.div`
  width: 35px; 
  height: 45px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EventoColor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  border-radius: 4px;
`;
