{
    // Array
    const fruits: string[] = ['apple', 'banana'];
    const scores: Array<number> = [1, 2, 3];

    function printArray(fruits: readonly string[]) {

    }

    // Tuple -> interface, type alias, class
    let student: [string, number];
    student = ['name', 123];
    console.log(student[0]) // name
    console.log(student[1]) // 123
    const [name, age] = student;
}
