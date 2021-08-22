export type IGlobalState = {
  auth: boolean;
  token: string;
  user: any;
  isFetching: boolean;
  error: boolean;
};

export interface IRootAppState {
  root: IGlobalState;
}
