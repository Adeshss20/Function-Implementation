const tail = require('./tail');

describe('tail', () => {

    it('Head of [] is []', () => {
        expect(tail([])).toEqual([]);
    });

})