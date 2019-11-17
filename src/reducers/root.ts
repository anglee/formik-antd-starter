import { combineReducers } from 'redux';
import appReducer, * as fromApp from './app/appReducer';

export interface IReduxState {
  app: fromApp.IState;
}

export default combineReducers({
  app: appReducer,
});

export const selectors = {
  getUsername: (state: IReduxState) => state.app.username,
};
