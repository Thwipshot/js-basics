// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const array = [80, 80, 60];
console.log(calculateGrade(array));

function calculateGrade(marks) {
    const average = calculateAverage(marks);
    //let average = marks.reduce((a, b) => a+b, 0)/ marks.length;
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';

}

function calculateAverage(array) {
    let sum = 0;
    for ( let value of array)
        sum += value;
    return sum / array.length;
}