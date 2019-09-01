import { ATTEMPT_GET_BOND_DATA, getBondDataSuccess } from './actions';

import GeneralApi from '../api';
const Api = new GeneralApi();

const apiMiddleWare = store => next => action => {
  const { type } = action;
  switch (type) {
    case ATTEMPT_GET_BOND_DATA:
      Api.getData()
        .then(res => {
          next(getBondDataSuccess(res));
        });
      break;

    default:
      next(action);
  }
};

export default apiMiddleWare;
