describe('Array tests', () => {
    test('should return -1 when the value is not present', () => {
        expect([1, 2, 3].indexOf(4)).toBe(-1);
    });
    test('should return index', () => {
        expect([1, 2, 3].indexOf(2)).toBe(1);
    });
});
