import { IRootAppState } from './../types/index';
import { createSelector } from 'reselect';

const selectRootState = (state: IRootAppState) => state.root;

export const makeSelectUser = createSelector(
  selectRootState,
  (root) => root.user,
);
