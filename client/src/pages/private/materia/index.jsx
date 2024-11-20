import React from 'react';
import styled from 'styled-components';
import Portada from '../../../components/ui/portada';
import ButtonGene from '../../../components/commun/buttonGeneral';


const Container = styled.div`
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

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const ViewAllLink = styled.a`
  color: #ffa500;
  text-decoration: none;
  display: flex;
  align-items: center;
  
  &::after {
    content: '>';
    margin-left: 5px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  border-radius: 10px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);  
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CardImage = styled.div`
  width: 240px;
  height: 120px;
  background: linear-gradient(135deg, #fff3e0, #ffeb3b);
  margin-bottom: 15px;
`;

const CardTitle = styled.h2`
  font-size: 18px;
  margin: 0 0 10px 0;
`;

const CardInfo = styled.p`
  font-size: 14px;
  margin: 0 0 15px 0;
`;

const EnterButton = styled.button`
  background-color: #ffd700;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
`;

const Materias = () => {
  const subjects = [
    { title: 'INGENIERIA DE SOFTWARE I', teacher: 'Yblin Vargas', room: 'Aula 301', time: '07:30 am a 10:00 am' },
    { title: 'INGENIERIA DE SOFTWARE I', teacher: 'Yblin Vargas', room: 'Aula 301', time: '07:30 am a 10:00 am' },
    { title: 'INGENIERIA DE SOFTWARE I', teacher: 'Yblin Vargas', room: 'Aula 301', time: '07:30 am a 10:00 am' },
    { title: 'INGENIERIA DE SOFTWARE I', teacher: 'Yblin Vargas', room: 'Aula 301', time: '07:30 am a 10:00 am' },
    { title: 'INGENIERIA DE SOFTWARE I', teacher: 'Yblin Vargas', room: 'Aula 301', time: '07:30 am a 10:00 am' },
    { title: 'INGENIERIA DE SOFTWARE I', teacher: 'Yblin Vargas', room: 'Aula 301', time: '07:30 am a 10:00 am' },
  ];

  const handleClick = () => {
    console.log('Botón de materias clickeado!');
  };

  return (
    <>
      <div>
        <Portada name="Materias" onClick={handleClick} />
      </div>
      <Container>
        <Header>
          <Title>Materias</Title>
          <ViewAllLink href="#">Ver Todo</ViewAllLink>
        </Header>
        <Grid>
          {subjects.map((subject, index) => (
            <Card key={index}>
              <CardImage />
              <CardTitle>{subject.title}</CardTitle>
              <CardInfo>
                Docente: {subject.teacher}<br />
                {subject.room} horario {subject.time}
              </CardInfo>
              <ButtonGene name='Entrar'></ButtonGene>
            </Card>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Materias;