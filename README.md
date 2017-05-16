<a name="module_colombia-holidays"></a>

## colombia-holidays
Días festivos no laborables en Colombia. Calculados con base en la ley 51 de 1983

**Lastmodified**: 2017-04-25  
**Since**: 2017-04-24  
**Version**: 0.0.1  
**Author:** <escatano@bancolombia.com.co>  
**Example**  
```js
npm install colombia-holidays 
var module = require('colombia-holidays');
```
<a name="module_colombia-holidays..getColombiaHolidaysByYear"></a>

### colombia-holidays~getColombiaHolidaysByYear(year) ⇒ <code>array</code>
Devuelve la lista de festivos no laborables en Colombia para un año

**Kind**: inner method of <code>[colombia-holidays](#module_colombia-holidays)</code>  
**Returns**: <code>array</code> - Arreglo con la lista de festivos para el año ingresado  

| Param | Type | Description |
| --- | --- | --- |
| year | <code>int</code> | Año entre 1970 y 99999 para el que se desea obtener la lista de festivos |

**Example**  
```js
//Invocación
var array = module.getColombiaHolidaysByYear(2017);
// Lista de retorno
[ { holiday: '2017-01-01',
  celebrationDay: '2017-01-01',
  celebration: 'Año Nuevo' },
{ holiday: '2017-01-09',
  celebrationDay: '2017-01-06',
  celebration: 'Día de los Reyes Magos' },
{ holiday: '2017-03-20',
  celebrationDay: '2017-03-19',
  celebration: 'Día de San José' },
{ holiday: '2017-04-13',
  celebrationDay: '2017-04-13',
  celebration: 'Jueves Santo' },
{ holiday: '2017-04-14',
  celebrationDay: '2017-04-14',
  celebration: 'Viernes Santo' },
{ holiday: '2017-05-01',
  celebrationDay: '2017-05-01',
  celebration: 'Día del Trabajo' },
{ holiday: '2017-05-29',
  celebrationDay: '2017-05-25',
  celebration: 'Ascensión del Señor' },
{ holiday: '2017-06-19',
  celebrationDay: '2017-06-15',
  celebration: 'Corphus Christi' },
{ holiday: '2017-06-26',
  celebrationDay: '2017-06-23',
  celebration: 'Sagrado Corazón de Jesús' },
{ holiday: '2017-07-03',
  celebrationDay: '2017-06-29',
  celebration: 'San Pedro y San Pablo' },
{ holiday: '2017-07-20',
  celebrationDay: '2017-07-20',
  celebration: 'Día de la Independencia' },
{ holiday: '2017-08-07',
  celebrationDay: '2017-08-07',
  celebration: 'Batalla de Boyacá' },
{ holiday: '2017-08-21',
  celebrationDay: '2017-08-15',
  celebration: 'La Asunción de la Virgen' },
{ holiday: '2017-10-16',
  celebrationDay: '2017-10-12',
  celebration: 'Día de la Raza' },
{ holiday: '2017-11-06',
  celebrationDay: '2017-11-01',
  celebration: 'Todos los Santos' },
{ holiday: '2017-11-13',
  celebrationDay: '2017-11-11',
  celebration: 'Independencia de Cartagena' },
{ holiday: '2017-12-08',
  celebrationDay: '2017-12-08',
  celebration: 'Día de la Inmaculada Concepción' },
{ holiday: '2017-12-25',
  celebrationDay: '2017-12-25',
  celebration: 'Día de Navidad' } ]
```

----------
*Made with ♥ at Nequi*