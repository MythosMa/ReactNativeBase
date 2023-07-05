import {action, makeAutoObservable, observable} from 'mobx';

class TestStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable testObject = {numberObject: {number: 0}};
  @action testObjectCountAdd() {
    let target = this.testObject.numberObject;
    target.number++;
  }

  @observable a = 0;
  @action add() {
    this.a++;
  }
}

export default TestStore;
