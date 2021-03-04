const tail = require('./tail');

describe('tail', () => {

    it('Head of [] is []', () => {
        expect(tail([])).toEqual([]);
    });

    it('Head of [1] is []', () => {
        expect(tail([1])).toEqual([]);
    });

})