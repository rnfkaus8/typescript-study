{
    // javascript
 /*
    function jsAdd(num1, num2){
        return num1 + num2;
    }

    // typescript
    function add(num1: number, num2: number): number{
        return num1 + num2;
    }

    function jsFetchNum(id) {
        // code...
        // code...
        // code...
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }

    // typescript
    function fetchNum(id: string): Promise<number> {
        // code...
        // code...
        // code...
        return new Promise((resolve, reject) => {
            resolve(100);
        })
    }
*/
    // javascript -> typescript
    // optional parameter
    function printName(firstName: String, lastName?: string) {
        console.log(firstName);
        console.log(lastName);
    }

    printName('steve', 'jobs');
    printName('taehyun')
    printName('Anna', undefined);

    // Default parameter
    function printMessage(message: string = 'default message') {
        console.log(message);
    }

    printMessage();

    // Rest parameter
    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((a, b) => a + b);
    }
    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2, 3, 4));
    console.log(addNumbers(1, 2, 3, 4, 5, 6));

}

