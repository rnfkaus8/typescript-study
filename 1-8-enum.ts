{
    /**
     * Enum
     */
    // in JavaScript
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 0;
    const WEDNESDAY = 0;
    const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2});
    const dayOfToday = DAYS_ENUM.MONDAY;

    // in TypeScript
    enum Days {
        Monday,
        TuesDay,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday,
    }

    console.log(Days.Monday);
    let day: Days = Days.Saturday;
    day = Days.TuesDay;
    day = 10;
    console.log(day);

    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
    let dayOfWeek: DaysOfWeek = 'Monday';
    dayOfWeek = 'Wednesday';
}
