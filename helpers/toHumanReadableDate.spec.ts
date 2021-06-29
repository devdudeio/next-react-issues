import {toHumanReadableDate} from './toHumanReadableDate';

describe('toHumanReadableDate', () => {

    test('should be "June 28, 2021, 11:00 AM"', () => {
        const actual = toHumanReadableDate("2021-06-28T09:00:00Z");
        const expected = "June 28, 2021, 11:00 AM"

        expect(actual).toBe(expected);
    });

    test('should be "January 8, 2021, 4:00 PM"', () => {
        const actual = toHumanReadableDate("2021-01-08T15:00:00Z");
        const expected = "January 8, 2021, 4:00 PM"

        expect(actual).toBe(expected);
    });
    test('can handle no input', () => {
        // @ts-ignore
        const actual = toHumanReadableDate();
        const expected = "Invalid Date"
        expect(actual).toBe(expected);
    });

    test('can handle wrong input type', () => {
        // @ts-ignore
        const actual = toHumanReadableDate(12354364241);
        const expected = "Invalid Date"
        expect(actual).toBe(expected);
    });

    test('can handle wrong input', () => {
        // @ts-ignore
        const actual = toHumanReadableDate("this is not a date");
        const expected = "Invalid Date"
        expect(actual).toBe(expected);
    });

});