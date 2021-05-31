'use strict';

const {Queue} = require('../stacksAndQueues/stacks-and-queues');


class AnimalShelter {
  constructor(){
    this.dogs = new Queue();
    this.cats = new Queue();
  }
  enqueue(animal){
    if(animal.type === 'cat'){
      this.cats.enqueue(animal);
    } else if (animal.type === 'dog'){
      this.dogs.enqueue(animal);
    } else {
      return 'You Can Only Add Dogs Or Cats';
    }
  }

  dequeue(pref){
    if(pref === 'cat'){
      return this.cats.dequeue();
    }else if (pref === 'dog'){
      return this.dogs.dequeue();
    } else {
      return 'You Can Only return Dogs Or Cats';
    }
  }
}

module.exports = AnimalShelter;
