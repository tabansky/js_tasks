const weekDays = {
	'Mo': 'Понедельник',
	'Tu': 'Вторник',
	'We': 'Среда',
	'Th': 'Четверг',
	'Fr': 'Пятница',
	'Sa': 'Суббота',
	'Su': 'Воскресенье'
};

const romTranslate = ['Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Simbata', 'Duminica'];

const translate = (obj, translate) => {
	const keys =  Object.keys(obj);

	for (const key in keys) {
		obj[keys[key]] = translate[key];
	}
};

translate(weekDays, romTranslate);
console.log(weekDays);

