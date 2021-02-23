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
	const newObj = {...obj};
	const keys = Object.keys(newObj);

	for (const key in keys) {
		newObj[keys[key]] = translate[key];
	}

	return newObj;
};

console.log(translate(weekDays, romTranslate));

