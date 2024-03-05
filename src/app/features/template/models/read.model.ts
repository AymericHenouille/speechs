export interface ReadResponse<T> {
  payload: T;
  total: number;
  offset: number;
  limit: number;
}

export interface RefreshResponse<T> {

  payload: T[];
}
