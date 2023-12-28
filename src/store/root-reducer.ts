import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../consts';
import { userProcess } from './user-process/user-process';
import { errorProcess } from './error-process/error-process';
import { staffProcess } from './staff-process/staff-process';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Staff]: staffProcess.reducer,
  [NameSpace.Error]: errorProcess.reducer,
});
