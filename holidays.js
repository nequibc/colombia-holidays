var NEXT_DAY = require('./nextDay.js');

var EASTER_WEEK_HOLIDAYS = [
    { day: -3, daysToSum: NEXT_DAY.NONE, celebration: 'Jueves Santo' },
    { day: -2, daysToSum: NEXT_DAY.NONE, celebration: 'Viernes Santo' },
    { day: 39, daysToSum: NEXT_DAY.MONDAY, celebration: 'Ascensión del Señor' },
    { day: 60, daysToSum: NEXT_DAY.MONDAY, celebration: 'Corphus Christi' },
    { day: 68, daysToSum: NEXT_DAY.MONDAY, celebration: 'Sagrado Corazón de Jesús' }
];

var HOLIDAYS = [
    { day: '01-01', daysToSum: NEXT_DAY.NONE, celebration: 'Año Nuevo' },
    { day: '05-01', daysToSum: NEXT_DAY.NONE, celebration: 'Día del Trabajo' },
    { day: '07-20', daysToSum: NEXT_DAY.NONE, celebration: 'Día de la Independencia' },
    { day: '08-07', daysToSum: NEXT_DAY.NONE, celebration: 'Batalla de Boyacá' },
    { day: '12-08', daysToSum: NEXT_DAY.NONE, celebration: 'Día de la Inmaculada Concepción' },
    { day: '12-25', daysToSum: NEXT_DAY.NONE, celebration: 'Día de Navidad' },
    { day: '01-06', daysToSum: NEXT_DAY.MONDAY, celebration: 'Día de los Reyes Magos' },
    { day: '03-19', daysToSum: NEXT_DAY.MONDAY, celebration: 'Día de San José' },
    { day: '06-29', daysToSum: NEXT_DAY.MONDAY, celebration: 'San Pedro y San Pablo' },
    { day: '08-15', daysToSum: NEXT_DAY.MONDAY, celebration: 'La Asunción de la Virgen' },
    { day: '10-12', daysToSum: NEXT_DAY.MONDAY, celebration: 'Día de la Raza' },
    { day: '11-01', daysToSum: NEXT_DAY.MONDAY, celebration: 'Todos los Santos' },
    { day: '11-11', daysToSum: NEXT_DAY.MONDAY, celebration: 'Independencia de Cartagena' }
];

module.exports = {
    EASTER_WEEK_HOLIDAYS: EASTER_WEEK_HOLIDAYS,
    HOLIDAYS: HOLIDAYS
};