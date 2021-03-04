const max = require('./max');

describe('max', () => {

    it('max of [1] is 1', () => {
        expect(max([1],0)).toEqual(1);
    });

})