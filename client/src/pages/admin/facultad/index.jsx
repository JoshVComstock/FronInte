import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { PlusCircle, Edit3, Trash2 } from 'lucide-react';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f4f7f6;
    font-family: 'Inter', sans-serif;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  text-align: center;
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: 700;
`;

const FormContainer = styled.form`
  display: flex;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 0.75rem;
  border: 2px solid #3498db;
  border-radius: 8px 0 0 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #2980b9;
  }
`;

const AddButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0 8px 8px 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FacultadName = styled.span`
  font-size: 1.1rem;
  color: #2c3e50;
  font-weight: 600;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.hoverColor};
  }
`;

const Facultad = () => {
  const [facultades, setFacultades] = useState([]);
  const [nombreFacultad, setNombreFacultad] = useState('');
  const [editando, setEditando] = useState(null);

  const agregarFacultad = (e) => {
    e.preventDefault();
    if (nombreFacultad.trim()) {
      if (editando !== null) {
        const facultadesActualizadas = facultades.map((f, index) => 
          index === editando ? nombreFacultad : f
        );
        setFacultades(facultadesActualizadas);
        setEditando(null);
      } else {
        setFacultades([...facultades, nombreFacultad]);
      }
      setNombreFacultad('');
    }
  };

  const eliminarFacultad = (index) => {
    const nuevasFacultades = facultades.filter((_, i) => i !== index);
    setFacultades(nuevasFacultades);
  };

  const editarFacultad = (index) => {
    setNombreFacultad(facultades[index]);
    setEditando(index);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Gestión de Facultades</Title>
        
        <FormContainer onSubmit={agregarFacultad}>
          <Input
            type="text"
            value={nombreFacultad}
            onChange={(e) => setNombreFacultad(e.target.value)}
            placeholder="Nombre de la Facultad"
          />
          <AddButton type="submit">
            <PlusCircle className="mr-2" /> 
            {editando !== null ? 'Actualizar' : 'Agregar'}
          </AddButton>
        </FormContainer>

        <CardsGrid>
          {facultades.map((facultad, index) => (
            <Card key={index}>
              <FacultadName>{facultad}</FacultadName>
              <ActionButtons>
                <IconButton 
                  onClick={() => editarFacultad(index)} 
                  hoverColor="rgba(52, 152, 219, 0.1)"
                >
                  <Edit3 color="#3498db" />
                </IconButton>
                <IconButton 
                  onClick={() => eliminarFacultad(index)} 
                  hoverColor="rgba(231, 76, 60, 0.1)"
                >
                  <Trash2 color="#e74c3c" />
                </IconButton>
              </ActionButtons>
            </Card>
          ))}
        </CardsGrid>
      </Container>
    </>
  );
};

export default Facultad;