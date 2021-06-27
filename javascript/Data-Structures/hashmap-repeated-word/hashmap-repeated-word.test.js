'use strict';

const repeatedWord = require('./hashmap-repeated-word');

describe('REPEATED WORDS HASHMAP TEST', ()=>{
  it('Should return the first set of duplicate words', ()=>{
    let string = 'Once upon a time, there was a brave princess who';
    expect(repeatedWord(string)).toEqual('a');
  });
  it('Should return the first set of duplicate words regardless of capitalization', ()=>{
    let string = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness';
    expect(repeatedWord(string)).toEqual('it');
  });
  it('Should return the first set of duplicate words regardless of punctuations', ()=>{
    let string = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs,';
    expect(repeatedWord(string)).toEqual('summer');
  });
  it('Should return no duplicates if there were non', ()=>{
    let string = 'hello my name is yasmeen';
    expect(repeatedWord(string)).toEqual('There is no duplicates in the String');
  });
});
