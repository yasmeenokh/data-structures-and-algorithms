'use strict';

const AnimalShelter = require('./fifo-animal-shelter');
const animalShelter = new AnimalShelter();

let catObj = {
  type : 'cat',
  name : 'simba',
  age : 2,
};

let dogObj = {
  type : 'dog',
  name : 'roxy',
  age : 3,
};
let birdObj= {
  type : 'bird',
  name : 'roxy',
  age : 3,
};

describe('Animal Shelter test', ()=>{
  it('should add to a cat to the cats Queue', ()=>{
    animalShelter.enqueue(catObj);
    console.log('hhhhhhhhh',animalShelter.cats);
    expect(animalShelter.cats.front.value.name).toEqual('simba');
    expect(animalShelter.cats.front.value.age).toEqual(2);
  });
  it('should add to a dog to the dogs Queue', ()=>{
    animalShelter.enqueue(dogObj);
    console.log('hhhhhhhhh',animalShelter.dogObj);
    expect(animalShelter.dogs.front.value.name).toEqual('roxy');
    expect(animalShelter.dogs.front.value.age).toEqual(3);
  });
  it('should not add if the type is not cat or dog', ()=>{
    animalShelter.enqueue(birdObj);
    expect(animalShelter.enqueue(birdObj)).toEqual('You Can Only Add Dogs Or Cats');
  });
  it('should enqueue from cats if pref = cat', ()=>{
    // console.log(animalShelter.dequeue('cat'));
    expect(animalShelter.dequeue('cat')).toEqual(catObj);
  });
  it('should enqueue from dogs if pref = dogs', ()=>{
    // console.log(animalShelter.dequeue('cat'));
    expect(animalShelter.dequeue('dog')).toEqual(dogObj);
  });
  it('should not dequeue if the type is not cat or dog', ()=>{
    expect(animalShelter.dequeue('bird')).toEqual('You Can Only return Dogs Or Cats');
  });

});
