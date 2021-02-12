const students =
    [
        {
            name: 'Gena',
            marks: [7, 2, 2, 5, 2]
        },
        {
            name: 'Slava',
            marks: [6, 8, 5, 3, 8]
        },
        {
            name: 'Galea',
            marks: [8, 8, 7, 5, 7]
        },
        {
            name: 'Vasea',
            marks: [10, 10, 7, 7, 8]
        },
        {
            name: 'John',
            marks: [8, 10, 7, 5, 4]
        },
        {
            name: 'Bezumno pervii',
            marks: [10, 10, 10, 10, 10]
        },
    ];


const marks = (student) => {
    return student.marks.reduce((accumulator, value) => (accumulator + value)) / student.marks.length;
}

const showStudents = (students) => {
    students.forEach(student => {
        console.log(`Студент: ${student.name}; Средняя оценка: ${student.mark}`);
    });
}

const getStudentAvgMarks = () => {
    let studentAvgMarks = [];

    students.forEach(student => {
        studentAvgMarks.push({name: student.name, mark: marks(student)});
    });

    return studentAvgMarks;
}

const getAllMarks = () => {
    let allMarks = [];

    students.forEach(student => {
        allMarks.push(marks(student));
    });

    return allMarks;
}

const sortStudentAvgMarks = () => {
    return getStudentAvgMarks().sort((a, b) => b.mark - a.mark);
}

const getAvgOfGroup = () => {
    const allMarks = getAllMarks();

    return (allMarks.reduce((accumulator, value) => (accumulator + value)) / allMarks.length).toFixed(2);
}

const getBadStudents = () => {
    let badStudents = [];

    students.forEach(student => {
        if (marks(student) < 5) {
            badStudents.push({name: student.name, mark: marks(student)});
        }
    });

    return badStudents;
}

const getAboveAverage = () => {
    let aboveAverage = [];

    students.forEach (student => {
        if (marks(student) > Number(getAvgOfGroup())) {
            aboveAverage.push({name: student.name, mark: marks(student)});
        }
    });

    return aboveAverage;
}

const getMaxMinAvg = () => {
    const allMarks = getAllMarks();

    return [Math.max(...allMarks), Math.min(...allMarks)];
}

console.log('Студенты и их средние оценки:');
showStudents(getStudentAvgMarks());

console.log('\nПлохие студенты:');
showStudents(getBadStudents());

console.log('\nСортировка по оценкам: ');
showStudents(sortStudentAvgMarks());

console.log('\nСтуденты чьи оценки выше средней группы: ');
showStudents(getAboveAverage());

const maxMinAvg = getMaxMinAvg();
console.log('\nМаксимальная средняя оценка = ' + maxMinAvg[0]);
console.log('Минимальная средняя оценка = ' + maxMinAvg[1]);
