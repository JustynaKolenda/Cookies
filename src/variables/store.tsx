import React, { createContext } from 'react'
import { action, makeObservable, observable } from 'mobx';

export class CounterStore {
  count = 0;
  constructor() {
    makeObservable(this, {
      count: observable,
      increment: action
  })
  }

  increment() {
    this.count++;
  }

}

export const CounterStoreContext = createContext(new CounterStore());
