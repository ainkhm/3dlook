export type Action<T, P = any> = {
  type: T;
  payload: P;
};
