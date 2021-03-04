const tail = require('./tail');

describe('tail', () => {

    it('Head of [] is []', () => {
        expect(tail([])).toEqual([]);
    });

    it('Head of [1] is []', () => {
        expect(tail([1])).toEqual([]);
    });

    it('Tail of [1,2,3] is [2,3]', () => {
        expect(tail([1,2,3])).toEqual([2,3]);
    });
})