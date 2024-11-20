import React from 'react';
import { Calendar as BigCalendar, dayjsLocalizer } from 'react-big-calendar';
import dayjs from 'dayjs';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { FaChevronLeft, FaChevronRight, FaCalendarAlt } from 'react-icons/fa';
import { RiMenuFold3Fill, RiMenuFold4Fill } from "react-icons/ri";
import 'dayjs/locale/es';
import ButtonGene from '../../commun/buttonGeneral';
import { BotonNavegacion, BottonNav, CirculoDia, ContenedorCalendario, ContenedorDia, ContenedorHerramientas, ContenedorNavegacion, ContenedorPerfil, ContenedorRecordatorios, DivButtonNav, DivTexto, EtiquetaMesAno, EventoColor, IconoRecordatorio, ImagenPerfil, ItemRecordatorio, NombrePerfil, RolPerfil, TextoDescripcion, TextoRecordatorio, TituloRecordatorio } from '../../../style/navRightStyle';
import { events, colorMap } from '../../../data/datosDate.jsx'

dayjs.locale('es'); // Configura el idioma en español

const NavRight = ({ isNavRead, navRead }) => {
  const localizer = dayjsLocalizer(dayjs);
  console.log(isNavRead)
  const components = {
    toolbar: ({ label, onNavigate }) => (
      <ContenedorHerramientas>
        <BotonNavegacion onClick={() => onNavigate('PREV')}><FaChevronLeft /></BotonNavegacion>
        <EtiquetaMesAno>{label.toUpperCase()}</EtiquetaMesAno>
        <BotonNavegacion onClick={() => onNavigate('NEXT')}><FaChevronRight /></BotonNavegacion>
      </ContenedorHerramientas>
    ),
    dateCellWrapper: ({ children, value }) => {
      const event = events.find(event =>
        dayjs(value).isSame(event.start, 'day')
      );
      const color = event ? colorMap[event.title] : 'transparent';

      return (
        <ContenedorDia>
          <CirculoDia style={{ backgroundColor: color }}>{children}</CirculoDia>
        </ContenedorDia>
      );
    },
    event: () => {
      return (
        <EventoColor>
          <FaCalendarAlt />
        </EventoColor>
      );
    }
  };

  const formats = {
    weekdayFormat: (date, culture, localizer) => localizer.format(date, 'dd', culture).charAt(0)
  };

  return (
    <>
      <DivButtonNav>
        <BottonNav onClick={navRead}>{isNavRead ? <RiMenuFold3Fill /> : <RiMenuFold4Fill />}</BottonNav>
      </DivButtonNav>
      <ContenedorNavegacion visible={isNavRead}>
        <ContenedorPerfil>
          <ImagenPerfil />
          <NombrePerfil>Rossana Angela Trujillo Santa Maria</NombrePerfil>
          <RolPerfil>Estudiante</RolPerfil>
          <ButtonGene name="Perfil" />
        </ContenedorPerfil>

        <ContenedorCalendario>
          <BigCalendar
            localizer={localizer}
            events={events}
            views={['month']}
            components={components}
            popup
            startAccessor="start"
            endAccessor="end"
            style={{ height: '300px', width: '100%', fontSize: '15px' }}
            defaultDate={new Date()}
            formats={formats}
          />
        </ContenedorCalendario>

        <TituloRecordatorio>Recordatorio</TituloRecordatorio>
        <ContenedorRecordatorios>
          {events.map((event, index) => (
            <ItemRecordatorio key={index}>
              <IconoRecordatorio><FaCalendarAlt /></IconoRecordatorio>
              <DivTexto>
                <TextoRecordatorio>
                  {event.title} - {dayjs(event.start).format('DD MMMM YYYY')} - {dayjs(event.start).format('h A')}
                </TextoRecordatorio>
                <TextoDescripcion>
                  {event.description}
                </TextoDescripcion>
              </DivTexto>
            </ItemRecordatorio>
          ))}
        </ContenedorRecordatorios>
      </ContenedorNavegacion>
    </>
  );
};

export default NavRight;

