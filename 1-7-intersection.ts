{
    /**
     * Intersection types: &
     */

    type Student = {
        name: string;
        score: number;
    };

    type Worker = {
        empolyeeId: number;
        work: () => void;
    };

    function internWork(person: Student & Worker) {
        console.log(person.name, person.empolyeeId, person.work())
    }
    internWork({
        name: 'emp1',
        score: 1,
        empolyeeId: 123,
        work: () => {},
    });
}
