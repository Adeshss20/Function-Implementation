const head = require('./head');

describe('head', () => {

    it('Head of [] is null', () => {
        expect(head([])).toEqual(null);
    });

})