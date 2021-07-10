export type IGlobalState = {
  user: any;
  isFetching: boolean;
  error: boolean;
};

export interface IRootAppState {
  root: IGlobalState;
}
