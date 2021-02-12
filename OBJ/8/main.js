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
	const keys = Object.keys(obj);
	let i = 0;

	for (const key of keys) {
		obj[key] = translate[i];
		i++;
	}
};

translate(weekDays, romTranslate);
console.log(weekDays);

