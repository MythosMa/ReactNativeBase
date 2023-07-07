import {action, makeAutoObservable, observable, runInAction} from 'mobx';
import {request} from '../network/request';
import {API} from '../network/api';

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

  @observable testApiData = null;
  @action getTestData() {
    request(API.getTestDataApi, {params: {a: 1}, body: {b: 44444}})
      .then(result => {
        runInAction(() => {
          this.testApiData = result;
        });
      })
      .catch(error => {});
  }

  @observable mobxComponent = null;
  @action setMobxComponent(component) {
    this.mobxComponent = this.mobxComponent ? null : component;
  }
}

export default TestStore;
