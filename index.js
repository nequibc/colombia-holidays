'user strict';
/**
 * @module colombia-holidays
 * @description Días festivos no laborables en Colombia. Calculados con base en la ley 51 de 1983
 * @author      Esteban Cataño Escobar
 * @version     0.0.1                 
 * @since       2017-04-24
 * @lastModified 2017-04-25
 * @example
 * npm install colombia-holidays
 * var module = require('colombia-holidays');
*/
module.exports = {
	/* Las funciones que expone el modulo van aqui   */
	getColombiaHolidaysByYear: getColombiaHolidaysByYear
};

var holidays = require('./holidays.js');
var MILLISECONDS_DAY = 86400000;

/** 
 * @function
 * @description Devuelve la lista de festivos no laborables en Colombia para un año
 * @param {int} year Año entre 1970 y 99999 para el que se desea obtener la lista de festivos
 * @return {array} Arreglo con la lista de festivos para el año ingresado
 * @example
 * //Invocación
 * var array = module.getColombiaHolidaysByYear(2017);
 * // Lista de retorno
 * [ { holiday: '2017-01-01',
 *   celebrationDay: '2017-01-01',
 *   celebration: 'Año Nuevo' },
 * { holiday: '2017-01-09',
 *   celebrationDay: '2017-01-06',
 *   celebration: 'Día de los Reyes Magos' },
 * { holiday: '2017-03-20',
 *   celebrationDay: '2017-03-19',
 *   celebration: 'Día de San José' },
 * { holiday: '2017-04-13',
 *   celebrationDay: '2017-04-13',
 *   celebration: 'Jueves Santo' },
 * { holiday: '2017-04-14',
 *   celebrationDay: '2017-04-14',
 *   celebration: 'Viernes Santo' },
 * { holiday: '2017-05-01',
 *   celebrationDay: '2017-05-01',
 *   celebration: 'Día del Trabajo' },
 * { holiday: '2017-05-29',
 *   celebrationDay: '2017-05-25',
 *   celebration: 'Ascensión del Señor' },
 * { holiday: '2017-06-19',
 *   celebrationDay: '2017-06-15',
 *   celebration: 'Corphus Christi' },
 * { holiday: '2017-06-26',
 *   celebrationDay: '2017-06-23',
 *   celebration: 'Sagrado Corazón de Jesús' },
 * { holiday: '2017-07-03',
 *   celebrationDay: '2017-06-29',
 *   celebration: 'San Pedro y San Pablo' },
 * { holiday: '2017-07-20',
 *   celebrationDay: '2017-07-20',
 *   celebration: 'Día de la Independencia' },
 * { holiday: '2017-08-07',
 *   celebrationDay: '2017-08-07',
 *   celebration: 'Batalla de Boyacá' },
 * { holiday: '2017-08-21',
 *   celebrationDay: '2017-08-15',
 *   celebration: 'La Asunción de la Virgen' },
 * { holiday: '2017-10-16',
 *   celebrationDay: '2017-10-12',
 *   celebration: 'Día de la Raza' },
 * { holiday: '2017-11-06',
 *   celebrationDay: '2017-11-01',
 *   celebration: 'Todos los Santos' },
 * { holiday: '2017-11-13',
 *   celebrationDay: '2017-11-11',
 *   celebration: 'Independencia de Cartagena' },
 * { holiday: '2017-12-08',
 *   celebrationDay: '2017-12-08',
 *   celebration: 'Día de la Inmaculada Concepción' },
 * { holiday: '2017-12-25',
 *   celebrationDay: '2017-12-25',
 *   celebration: 'Día de Navidad' } ]
*/
function getColombiaHolidaysByYear(year) {
	if (!year) {
		throw 'No year provided'
	} else {
		year = year.toString();
		if (!year.match(/^\d*$/g)) {
			throw 'The year is not a number'
		} else if (year < 1970 || year > 99999) {
			throw 'The year should be greater to 1969 and smaller to 100000'
		} else {
			var normalHolidays = holidays.HOLIDAYS.map((element, index, array) => {
				return {
					holiday: nextDay(year.toString().concat('-').concat(element.day), element.daysToSum),
					celebrationDay: year.toString().concat('-').concat(element.day),
					celebration: element.celebration
				};
			});
			var sunday = new Date(butcherAlgorithm(year));
			var easterWeekHolidays = holidays.EASTER_WEEK_HOLIDAYS.map((element, index, array) => {
				var day = new Date(sunday.getTime() + element.day * MILLISECONDS_DAY);
				return {
					holiday: nextDay(getFormattedDate(day.getUTCFullYear(), day.getUTCMonth() + 1, day.getUTCDate()), element.daysToSum),
					celebrationDay: getFormattedDate(day.getUTCFullYear(), day.getUTCMonth() + 1, day.getUTCDate()),
					celebration: element.celebration
				};
			});
			return normalHolidays.concat(easterWeekHolidays).sort((a, b) => {
				return new Date(a.holiday) - new Date(b.holiday);
			});
			;
		}
	}
}

function butcherAlgorithm(year) {
	var year = parseInt(year);
	var A = year % 19;
	var B = Math.floor(year / 100);
	var C = year % 100;
	var D = Math.floor(B / 4);
	var E = B % 4;
	var F = Math.floor((B + 8) / 25);
	var G = Math.floor((B - F + 1) / 3);
	var H = (19 * A + B - D - G + 15) % 30;
	var I = Math.floor(C / 4);
	var K = C % 4;
	var L = (32 + 2 * E + 2 * I - H - K) % 7;
	var M = Math.floor((A + 11 * H + 22 * L) / 451);
	var N = H + L - 7 * M + 114;
	var month = Math.floor(N / 31);
	var day = 1 + (N % 31);
	return getFormattedDate(year, month, day);
}

function nextDay(day, sum) {
	var date = new Date(day);
	var newDate = (sum === 7 ? date : new Date(date.getTime() + (((7 + sum) - date.getUTCDay()) % 7) * MILLISECONDS_DAY));
	return getFormattedDate(newDate.getUTCFullYear(), newDate.getUTCMonth() + 1, newDate.getUTCDate());
}

function addZero(number) {
	number = number.toString();
	if (number > 0 && number < 10 && !number.startsWith('0')) {
		return '0'.concat(number);
	} else {
		return number;
	}
}

function getFormattedDate(year, month, day) {
	return year.toString().concat('-').concat(addZero(month)).concat('-').concat(addZero(day));
}
