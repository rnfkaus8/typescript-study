{
    /**
     * JavaScript
     * Primitive: number, string, boolean, bigint, symbol, null, undefined
     * Object: function, array....
     */
        // number
    const num: number = 10;

    // string
    const str: string = 'hello';

    // boolean
    const bool: boolean = false;

    // undefined
    let age: number | undefined;
    age = undefined;
    age = 1;
    const find = (): number | undefined => {
        return undefined;
    };

    // null
    let person: string | null;
    person = null;
    person = 'kim tae hyun';

    // unknown
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    // any
    let anything: any = 0;
    anything = 'hello';

    // void
    function print(): void {
        console.log('hello');
        return;
    }

    // never
    function throwError(message: string): never {
        throw new Error(message);
    }

    // object
    let obj: object;
    function acceptSomeObject(obj: object) {

    }
    acceptSomeObject({name:'ellie'});
    acceptSomeObject({animal:'dog'});
}
