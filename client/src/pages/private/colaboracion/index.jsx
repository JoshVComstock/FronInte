import React from 'react';
import Portada from '../../../components/ui/portada';
import styled from 'styled-components';
import FotoPequena from '../../../../src/assets/img/howl.jpg'

const DashboardContainer = styled.div`
  width: 100%;
  height: 430px;
  overflow-y: auto;
  margin: 0 auto;
  padding: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin: 0;
  color: black;
`;

const ViewAllLink = styled.a`
  color: black;
  text-decoration: none;
  font-weight: bold;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 30px;
`;

const ProjectCard = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProjectType = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: orange;
  margin-bottom: 10px;
`;

const ProjectTitle = styled.h3`
  margin: 0 0 10px 0;
  color: #666;
`;

const ProjectStatus = styled.span`
  font-size: 12px;
  color: ${props => props.color};
  margin-left: 10px;
`;

const Collaborators = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const CollaboratorAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: -10px;
  border: 2px solid #fff;
  object-fit: cover;
  &:last-child {
    margin-right: 10px;
  }
`;

const CollaboratorCount = styled.div`
  background-color: #f0f0f0;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const Th = styled.th`
  text-align: left;
  padding: 10px;
  border-bottom: 2px solid #ffd700;
  color: #ffd700;
  font-weight: bold;
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  color: #666;
`;

const Colaboraciones = () => {

  const projects = [
    { type: 'INGENIERIA DE SOFTWARE I', title: 'Heladeria Flavor Burst', status: 'Privado', collaborators: 5 },
    { type: 'INGENIERIA DE SOFTWARE I', title: 'Heladeria Flavor Burst', status: 'Público', collaborators: 5 },
    { type: 'INGENIERIA DE SOFTWARE I', title: 'Heladeria Flavor Burst', status: 'Colaborativo', collaborators: 5 },
  ];

  const tableData = [
    { project: 'Flavor Burst', teacher: 'Yblin Vargas', collaborators: 5, start: '01-07-2024', subject: 'Ingenieria de Sistemas I', modified: '01-10-2024', status: 'En Proceso' },
    { project: 'Flavor Burst', teacher: 'Yblin Vargas', collaborators: 7, start: '01-07-2024', subject: 'Ingenieria de Sistemas I', modified: '01-10-2024', status: 'Terminado' },
    { project: 'Flavor Burst', teacher: 'Yblin Vargas', collaborators: 6, start: '01-07-2024', subject: 'Ingenieria de Sistemas I', modified: '01-10-2024', status: 'En Proceso' },
  ];

  return (
    <>
      <Portada name="Colaborar" />
      <DashboardContainer>
        <Header>
          <Title>Colaboraciones</Title>
          <ViewAllLink href="#">Ver Todo &gt;</ViewAllLink>
        </Header>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectType>{project.type}</ProjectType>
              <ProjectTitle>
                {project.title}
                <ProjectStatus color={project.status === 'Privado' ? 'red' : project.status === 'Público' ? 'green' : 'blue'}>
                  {project.status}
                </ProjectStatus>
              </ProjectTitle>
              <div>Grupal</div>
              <div>Docente: Yblin Vargas</div>
              <Collaborators>
                {[...Array(4)].map((_, i) => (
                  <CollaboratorAvatar key={i} src={FotoPequena} alt="Colaborador" />
                ))}
                <CollaboratorCount>+{project.collaborators}</CollaboratorCount>
              </Collaborators>
            </ProjectCard>
          ))}
        </ProjectsGrid>

        <Table>
          <thead>
            <tr>
              <Th>Proyecto</Th>
              <Th>Docente</Th>
              <Th>Colaboradores</Th>
              <Th>Comienzo</Th>
              <Th>Materia</Th>
              <Th>Fecha Modificación</Th>
              <Th>Estado</Th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <Td>{row.project}</Td>
                <Td>{row.teacher}</Td>
                <Td>
                  <Collaborators>
                    {[...Array(4)].map((_, i) => (
                      <CollaboratorAvatar key={i} src={FotoPequena} alt="Colaborador" />
                    ))}
                    <CollaboratorCount>+{row.collaborators}</CollaboratorCount>
                  </Collaborators>
                </Td>
                <Td>{row.start}</Td>
                <Td>{row.subject}</Td>
                <Td>{row.modified}</Td>
                <Td>{row.status}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </DashboardContainer>
    </>
  );
};

export default Colaboraciones;
