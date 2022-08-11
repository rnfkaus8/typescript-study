{
    /**
     * Type Aliases
     */
    type Text = string;
    const name: Text = 'tae hyun';
    const address: Text = 'korea';
    type Num = number;
    type Student = {
        name: string;
        age: number;
    };

    const student: Student = {
        name: 'kim tae hyun',
        age: 31,
    };

    /**
     * String Literal Types
     */

    type Name = 'name';
    let typeName: Name;
    typeName = 'name';
    type JSON = 'json';
    const json: JSON = 'json'

}
