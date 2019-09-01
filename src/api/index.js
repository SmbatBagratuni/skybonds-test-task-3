import { FakeData } from './FakeData';

export default class GeneralApi {
  getData() {
    return new Promise(res => {
      res(FakeData);
    });
  }
}
