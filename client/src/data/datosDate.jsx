import dayjs from 'dayjs';

export const events = [
    {
      start: dayjs('2024-10-12').toDate(),
      end: dayjs('2024-10-12').toDate(),
      title: "Ingeniería de Software I",
      description: "Sistema de gestion de ventas e inventario"
    },
    {
      start: dayjs('2024-10-16').toDate(),
      end: dayjs('2024-10-16').toDate(),
      title: "Programación Avanzada",
      description: "Sistema de gestion de ventas e inventario"
    },
    {
      start: dayjs('2024-10-25').toDate(),
      end: dayjs('2024-10-25').toDate(),
      title: "Integrador Intermedio",
      description: "Sistema de gestion de ventas e inventario"
    }
  ];

  export const colorMap = {
    "Ingeniería de Software I": "#fbc02d",
    "Programación Avanzada": "#fdd835",
    "Integrador Intermedio": "#ffee58"
  };