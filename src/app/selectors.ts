import { IRootAppState } from './../types/index';
import { createSelector } from 'reselect';

const selectRootState = (state: IRootAppState) => state.root;

export const userSelector = createSelector(
  selectRootState,
  (root) => root.user,
);

export const isFetchingSelector = createSelector(
  selectRootState,
  (root) => root.isFetching,
);
