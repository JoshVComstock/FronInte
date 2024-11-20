import styled from "styled-components";
import { Colors } from "../colors";

export const Container = styled.div`
  width: 100%;
  height: 710px;
  padding: 16px;
  border-radius: 8px;
`;

export const Crear = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${Colors.gray200};
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 16px;
`;

export const ContainerBoton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  background: ${Colors.primary500};
  color: ${Colors.white};
  padding: 12px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: 0.2s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background: ${Colors.primary600};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: none;
  }
`;

export const Modal = styled.div`
  width: 100%;
  max-width: 460px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${Colors.white};
  padding: 24px;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  & input[type="text"],
  & textarea,
  & select,
  option {
    width: 100%;
    color: ${Colors.gray};
    padding: 8px 12px;
    margin-bottom: 16px;
    border-radius: 6px;
    font-size: 14px;
    border: 1px solid ${Colors.gray100};
    transition: all 0.2s;

    &:focus {
      outline: none;
      border-color: ${Colors.primary500};
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  pointer-events: all;
`;

export const TablesContainer = styled.div`
  width: 100%;
  height: 550px;
  margin-top: 10px;
  overflow-y: auto;
  padding-right: 8px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TableSection = styled.div`
  height: 250px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  border-radius: 8px;
`;

export const TableTitle = styled.h2`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 25px;
  border-radius: 10px;
  background: ${Colors.secundary700};
  color: ${Colors.primary400};
  font-size: 22px;
  margin-bottom: 8px;
  position: sticky;
  top: 0;
`;

export const TableWrapper = styled.div`
  width: 100%;
  height: 245px;
  display: flex;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${Colors.white};
  min-width: 650px;

  th, td {
    padding: 12px 16px;
    text-align: left;
    border-bottom: 1px solid ${Colors.secundary700};
  }

  th {
    color: ${Colors.primary400};
    background: ${Colors.white};
    font-weight: 600;
    position: sticky;
    top: 0;
    z-index: 1;
  }

  tbody tr:hover td {
    background: ${Colors.secundary};
    color: ${Colors.gray};
  }

  td {
    color: ${Colors.black};
  }

  a {
    color: ${Colors.black};
    text-decoration: none;

    &:hover {
      text-decoration: none;
      color: ${Colors.gray};
    }
  }
`;

export const ErrorMessage = styled.div`
  width: 100%;
  background: ${Colors.secundary600};
  color: ${Colors.primary700};
  padding: 12px 16px;
  border-radius: 6px;
  margin: 16px 0;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
`;
