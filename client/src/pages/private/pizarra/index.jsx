import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Plus, Users, User, UsersRound } from 'lucide-react';
import Portada from '../../../components/ui/portada';
import ExcalidrawComponente from '../../../components/ui/excalidraw';

const Pizarra = () => {
  const [activeTab, setActiveTab] = useState('individual');
  const [showModal, setShowModal] = useState(false);
  const boards = {
    individual: [
      { id: 1, title: "Mi primera pizarra", date: "2024-02-01", type: "individual" },
      { id: 2, title: "Notas personales", date: "2024-02-05", type: "individual" },
    ],
    grupal: [
      { id: 3, title: "Proyecto Equipo A", date: "2024-02-03", type: "grupal" },
      { id: 4, title: "Lluvia de ideas", date: "2024-02-06", type: "grupal" },
    ],
    colaborativo: [
      { id: 5, title: "Workshop Design", date: "2024-02-04", type: "colaborativo" },
      { id: 6, title: "Planificación Q1", date: "2024-02-07", type: "colaborativo" },
    ],
  };

  const getIcon = (type) => {
    switch (type) {
      case 'individual':
        return <User size={20} color="#3b82f6" />;
      case 'grupal':
        return <Users size={20} color="#10b981" />;
      case 'colaborativo':
        return <UsersRound size={20} color="#8b5cf6" />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <Portada name="Pizarras" />

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1.5rem' }}>
        <NewBoardButton onClick={() => setShowModal(true)}>
          <Plus size={20} />
          Nueva Pizarra
        </NewBoardButton>
      </div>

      <TabsContainer>
        <TabsList>
          <TabButton
            active={activeTab === 'individual'}
            onClick={() => setActiveTab('individual')}
          >
            <User size={16} />
            Individual
          </TabButton>
          <TabButton
            active={activeTab === 'grupal'}
            onClick={() => setActiveTab('grupal')}
          >
            <Users size={16} />
            Grupal
          </TabButton>
          <TabButton
            active={activeTab === 'colaborativo'}
            onClick={() => setActiveTab('colaborativo')}
          >
            <UsersRound size={16} />
            Colaborativo
          </TabButton>
        </TabsList>

        <BoardsGrid>
          {boards[activeTab].map(board => (
            <BoardCard key={board.id}>
              <CardHeader>
                <CardTitle>{board.title}</CardTitle>
                {getIcon(board.type)}
              </CardHeader>
              <CardDate>
                Creada el: {new Date(board.date).toLocaleDateString()}
              </CardDate>
            </BoardCard>
          ))}
        </BoardsGrid>
      </TabsContainer>

      {showModal && (
        <Modal onClick={() => setShowModal(false)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>Nueva Pizarra</ModalTitle>
              <CloseButton onClick={() => setShowModal(false)}>&times;</CloseButton>
            </ModalHeader>
            <ExcalidrawContainer>
              <ExcalidrawComponente />
            </ExcalidrawContainer>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default Pizarra;

// Contenedor principal
const Container = styled.div`
  padding: 1.5rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

// Botón Nueva Pizarra
const NewBoardButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2563eb;
  }
`;

// Contenedor de los tabs
const TabsContainer = styled.div`
  margin-top: 2rem;
`;

const TabsList = styled.div`
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 1.5rem;
`;

const TabButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.active ? '#3b82f6' : '#6b7280'};
  border-bottom: 2px solid ${props => props.active ? '#3b82f6' : 'transparent'};
  transition: all 0.2s;

  &:hover {
    color: #3b82f6;
  }
`;

const BoardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem 0;
`;

const BoardCard = styled.div`
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.125rem;
  color: #1f2937;
`;

const CardDate = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: #6b7280;
`;

// Modal/Dialog
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  width: 90%;
  max-width: 900px;
  height: 80vh;
  position: relative;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  color: #1f2937;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #6b7280;

  &:hover {
    color: #1f2937;
  }
`;

const ExcalidrawContainer = styled.div`
  height: calc(100% - 4rem);
  background-color: #f3f4f6;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;