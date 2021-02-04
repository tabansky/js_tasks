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

let studentAvgMarks = [];
let badStudents = [];
let allMarks = [];
let avgOfGroup = 0;
let aboveAverage = [];

const marks = (student) => {
    return student.marks.reduce((accumulator, value) => (accumulator + value)) / student.marks.length;
}

const showStudents = (students) => {
    students.forEach(student => {
        console.log(`Студент: ${student.name}; Средняя оценка: ${student.mark}`);
    });
}

students.forEach(student => {
    studentAvgMarks.push({name: student.name, mark: marks(student)});
    allMarks.push(marks(student));
    avgOfGroup = (allMarks.reduce((accumulator, value) => (accumulator + value)) / allMarks.length).toFixed(2);

    if (marks(student) < 5) {
        badStudents.push({name: student.name, mark: marks(student)});
    }
});

students.forEach (student => {
    if (marks(student) > Number(avgOfGroup)) {
        aboveAverage.push({name: student.name, mark: marks(student)});
    }
});

console.log('Студенты и их средние оценки:');
showStudents(studentAvgMarks);

console.log('\nПлохие студенты:');
showStudents(badStudents);

console.log('\nСортировка по оценкам: ');
studentAvgMarks = studentAvgMarks.sort((a, b) => b.mark - a.mark);
showStudents(studentAvgMarks);

console.log('\nСтуденты чьи оценки выше средней группы: ');
showStudents(aboveAverage);

console.log('\nMax average mark = ' + Math.max(...allMarks));
console.log('Min average mark = ' + Math.min(...allMarks));
