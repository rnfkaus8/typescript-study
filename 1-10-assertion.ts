{
    /**
     * Type Assertions
     */
    function jsStrFunc(): any {
        return 'hello'
    }
    function jsStrFuncError(): any {
        return 2;
    }
    const result = jsStrFunc();
    console.log((result as string).length); // 5
    const resultErr = jsStrFuncError();
    console.log((resultErr as string).length); // undefined

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)); // TypeError

    function findNumbers(): number[] | undefined {
        return undefined;
    }

    const numbers = findNumbers();
    numbers!.push(2);

    const button = document.querySelector('class')!;
}
