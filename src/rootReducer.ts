import { combineReducers } from 'redux';
import { homeReducer } from './views/Home/state/slice';
import { detailsReducer } from './views/Details/state/slice';

export const rootReducer = combineReducers({
  homeReducer,
  detailsReducer
});

export type RootState = ReturnType<typeof rootReducer>