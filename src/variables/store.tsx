import React, { createContext } from 'react'
import { action, computed, makeObservable, observable } from 'mobx';

export class CounterStore {
  count = 0;
  
  constructor() {
    makeObservable(this, {
      count: observable,
      increment: action,
      level: computed
  })
  }

  increment() {
    this.count++;
  }

  get level(){
    return this.count * 2
  }

}

export const CounterStoreContext = createContext(new CounterStore());
