const map = require('./map');

describe('map', () => {

    it('map([],identity) is []', () => {
        expect(map([],"identity")).toEqual([]);
    });
    
})