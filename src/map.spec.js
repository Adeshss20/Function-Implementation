const map = require('./map');

describe('map', () => {

    it('map([],identity) is []', () => {
        expect(map([],"identity")).toEqual([]);
    });
    
    it('map([1,2,3],identity) is [1,2,3]', () => {
        expect(map([1,2,3],"identity")).toEqual([1,2,3]);
    });

    it('map([],cube) is []', () => {
        expect(map([],"cube")).toEqual([]);
    });

    it('map([1,3,5],cube) is [1,27,125]', () => {       
        expect(map([1,3,5],"cube")).toEqual([1,27,125]);
    });

})