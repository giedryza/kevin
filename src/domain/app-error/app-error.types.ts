export enum AppErrorActionTypes {
  SetError = 'appError/SET_ERROR',
}

export interface AppErrorState {
  message: string | null;
}
