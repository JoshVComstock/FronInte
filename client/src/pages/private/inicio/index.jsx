import React, { useState } from 'react';
import { Star, Users, BookOpen, UserCircle } from 'lucide-react';
import { proyectosDestacados } from '../../../data/datosInicio';
import { Container, DocentesGrid, DocentesSection, DocenteTag, FacultadButton, FacultadesNav, InfoBox, InfoGrid, Main, ProyectoCard, ProyectoContent, ProyectoImagen, ProyectosGrid, ProyectoTitle, ProyectoTitleRow, StarsRow, TipoProyecto } from '../../../style/inicioStyled';
import { Colors } from '../../../style/colors';
import InicioPort from '../../../components/ui/inicioPort';

const Inicio = () => {
  const [facultadActiva, setFacultadActiva] = useState(proyectosDestacados[0].facultad);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={16}
        color={index < rating ? Colors.primary400 : Colors.primary400}
      />
    ));
  };

  return (
    <Container>
      <InicioPort name="MEJORES PROYECTOS POR FACULTAD"/>
      <Main>
        <FacultadesNav>
          {proyectosDestacados.map(({ facultad }) => (
            <FacultadButton key={facultad} active={facultadActiva === facultad} onClick={() => setFacultadActiva(facultad)}>{facultad}</FacultadButton>
          ))}
        </FacultadesNav>
        <ProyectosGrid>
          {proyectosDestacados
            .find(({ facultad }) => facultad === facultadActiva)
            ?.proyectos.map((proyecto) => (
              <ProyectoCard key={proyecto.id}>
                <ProyectoImagen src={proyecto.imagen} alt={proyecto.titulo} />
                <ProyectoContent>
                  <StarsRow>
                    {renderStars(4)}
                  </StarsRow>
                  <ProyectoTitleRow>
                    <ProyectoTitle>{proyecto.titulo}</ProyectoTitle>
                    <TipoProyecto tipo={proyecto.tipo}>{proyecto.tipo}</TipoProyecto>
                  </ProyectoTitleRow>

                  <InfoGrid>
                    <InfoBox type="materia">
                      <h3><BookOpen size={16} /> Materia</h3>
                      <p>{proyecto.materia}</p>
                    </InfoBox>
                    <InfoBox type="estudiantes">
                      <h3><Users size={16} /> Estudiantes</h3>
                      <ul>{proyecto.estudiantes.map((v, i) => (
                        <li key={i}>{v}</li>
                      ))}</ul>
                    </InfoBox>
                  </InfoGrid>

                  <DocentesSection>
                    <h3><UserCircle size={16} /> Docentes</h3>
                    <DocentesGrid>
                      {proyecto.docentes.map((docente) => (
                        <DocenteTag key={docente}>{docente}</DocenteTag>
                      ))}
                    </DocentesGrid>
                  </DocentesSection>
                </ProyectoContent>
              </ProyectoCard>
            ))}
        </ProyectosGrid>
      </Main>
    </Container>
  );
};

export default Inicio;