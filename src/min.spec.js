const min = require('./min');

describe('min', () => {

    it('min of [1] is 1', () => {
        expect(min([1],0)).toEqual(1);
    });
  
    it('min of [6,9,7,4,5] is 4', () => {
        expect(min([6,9,7,4,5],0)).toEqual(4);
    });
    
})