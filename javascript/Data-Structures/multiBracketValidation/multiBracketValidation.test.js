'use strict';

const multiBracketValidation = require('./multi-bracket-validation');


describe('Multi-Bracket-Validation TEST',()=>{
  it('should return error if the input was not a string', ()=>{
    expect(multiBracketValidation(555)).toEqual('YOU MUST ENTER A string');
  });
  it('should return true if the brackets in the string are balanced', ()=>{
    expect(multiBracketValidation('n')).toEqual(true);
    expect(multiBracketValidation('(n)')).toEqual(true);
    expect(multiBracketValidation('{(n)}')).toEqual(true);
    expect(multiBracketValidation('[{(n)}]')).toEqual(true);
  });
  it('should return false if the brackets in the string are not balanced', ()=>{
    expect(multiBracketValidation('(n')).toEqual(false);
    expect(multiBracketValidation('{(n)')).toEqual(false);
    expect(multiBracketValidation('[{n)}]')).toEqual(false);
    expect(multiBracketValidation('{{n)}]')).toEqual(false);

  });
});
