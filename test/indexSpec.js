var module = require('../index.js');

describe('colombia-holidays/index.js', function () {

    it('index.js: All functions and services exported are defined', function () {
        expect(module).toBeDefined();
        expect(module.getColombiaHolidaysByYear).toBeDefined();
    });

    it('index.js: getColombiaHolidaysByYear success year 2017', function () {
        try {
            var HOLIDAYS_2017 = ['2017-01-01', '2017-01-09', '2017-03-20', '2017-04-13', '2017-04-14', '2017-05-01', '2017-05-29',
                '2017-06-19', '2017-06-26', '2017-07-03', '2017-07-20', '2017-08-07', '2017-08-21', '2017-10-16', '2017-11-06',
                '2017-11-13', '2017-12-08', '2017-12-25'];
            var CELEBRATIONS_2017 = ['2017-01-01', '2017-01-06', '2017-03-19', '2017-04-13', '2017-04-14', '2017-05-01', '2017-05-25',
                '2017-06-15', '2017-06-23', '2017-06-29', '2017-07-20', '2017-08-07', '2017-08-15', '2017-10-12', '2017-11-01',
                '2017-11-11', '2017-12-08', '2017-12-25'];
            var CELEBRATIONS_DAY = ['Año Nuevo', 'Día de los Reyes Magos', 'Día de San José', 'Jueves Santo', 'Viernes Santo', 'Día del Trabajo', 'Ascensión del Señor',
                'Corphus Christi', 'Sagrado Corazón de Jesús', 'San Pedro y San Pablo', 'Día de la Independencia', 'Batalla de Boyacá', 'La Asunción de la Virgen', 'Día de la Raza', 'Todos los Santos',
                'Independencia de Cartagena', 'Día de la Inmaculada Concepción', 'Día de Navidad'];
            var array = module.getColombiaHolidaysByYear(2017);
            expect(array).toBeDefined();
            array.forEach(function (element, index, array) {
                expect(element.holiday).toBe(HOLIDAYS_2017[index]);
                expect(element.celebrationDay).toBe(CELEBRATIONS_2017[index]);
                expect(element.celebration).toBe(CELEBRATIONS_DAY[index]);
            });
        } catch (err) {
            console.log(err);
            fail();
        }
    });

    it('index.js: getColombiaHolidaysByYear success year 2019', function () {
        try {
            var HOLIDAYS_2019 = ['2019-01-01', '2019-01-07', '2019-03-25', '2019-04-18', '2019-04-19', '2019-05-01', '2019-06-03',
                '2019-06-24', '2019-07-01', '2019-07-01', '2019-07-20', '2019-08-07', '2019-08-19', '2019-10-14', '2019-11-04',
                '2019-11-11', '2019-12-08', '2019-12-25'];
            var array = module.getColombiaHolidaysByYear('2019');
            expect(array).toBeDefined();
            array.forEach(function (element, index, array) {
                expect(element.holiday).toBe(HOLIDAYS_2019[index]);
            });
        } catch (err) {
            console.log(err);
            fail();
        }
    });

    it('index.js: getColombiaHolidaysByYear success year 2043', function () {
        try {
            var HOLIDAYS_2043 = ['2043-01-01', '2043-01-12', '2043-03-23', '2043-03-26', '2043-03-27', '2043-05-01', '2043-05-11',
                '2043-06-01', '2043-06-08', '2043-06-29', '2043-07-20', '2043-08-07', '2043-08-17', '2043-10-12', '2043-11-02',
                '2043-11-16', '2043-12-08', '2043-12-25'];
            var array = module.getColombiaHolidaysByYear([2043]);
            expect(array).toBeDefined();
            array.forEach(function (element, index, array) {
                expect(element.holiday).toBe(HOLIDAYS_2043[index]);
            });
        } catch (err) {
            console.log(err);
            fail();
        }
    });

    it('index.js: getColombiaHolidaysByYear fail without year', function () {
        try {
            var array = module.getColombiaHolidaysByYear();
            expect(array).not.toBeDefined();
        } catch (err) {
            expect(err).toBeDefined();
            expect(err).toBe('No year provided');
        }
    });

    it('index.js: getColombiaHolidaysByYear fail year is not number', function () {
        try {
            var array = module.getColombiaHolidaysByYear('aasa');
            expect(array).not.toBeDefined();
        } catch (err) {
            expect(err).toBeDefined();
            expect(err).toBe('The year is not a number');
        }
    });

    it('index.js: getColombiaHolidaysByYear fail year smaller to 1970', function () {
        try {
            var array = module.getColombiaHolidaysByYear(1969);
            expect(array).not.toBeDefined();
        } catch (err) {
            expect(err).toBeDefined();
            expect(err).toBe('The year should be greater to 1969 and smaller to 100000');
        }
    });

    it('index.js: getColombiaHolidaysByYear fail year greater to 100000', function () {
        try {
            var array = module.getColombiaHolidaysByYear(100000);
            expect(array).not.toBeDefined();
        } catch (err) {
            expect(err).toBeDefined();
            expect(err).toBe('The year should be greater to 1969 and smaller to 100000');
        }
    });
});