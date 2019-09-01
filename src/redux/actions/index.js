/**Bond Data **/
export const ATTEMPT_GET_BOND_DATA = 'ATTEMPT_GET_BOND_DATA';
export const GET_BOND_DATA_SUCCESS = 'GET_BOND_DATA_SUCCESS';
export const GET_BOND_DATA_FAILED = 'GET_BOND_DATA_FAILED';
export const attemptGetBondData = () => ({ type: ATTEMPT_GET_BOND_DATA });
export const getBondDataSuccess = bondData => ({
  type: GET_BOND_DATA_SUCCESS,
  payload: { bondData },
});
export const getBondDataFailed = error => ({
  type: GET_BOND_DATA_FAILED,
  payload: { error },
});

/**Bond Type **/
export const CHANGE_TYPE = 'CHANGE_TYPE';
export const handleChangeType = selectedOption => ({
  type: CHANGE_TYPE,
  payload: { selectedOption },
});

/**Period Type **/
export const CHANGE_PERIOD = 'CHANGE_PERIOD';
export const changePeriod = periodType => ({
  type: CHANGE_PERIOD,
  payload: { periodType },
});
