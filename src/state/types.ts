import { ThunkAction } from 'redux-thunk';

import { RootState as State } from 'state/root.reducer';

export type ActionsUnion<A extends Record<string, AnyFunction>> = ReturnType<
  A[keyof A]
>;

export type Action<T extends string = string, P = void> = P extends void
  ? Readonly<{ type: T }>
  : Readonly<{ type: T; payload: P }>;

type GenericThunk<T> = ThunkAction<T, State, undefined, Action>;
export type Thunk = GenericThunk<void>;
export type PromiseThunk<P = {} | void> = GenericThunk<Promise<P>>;

export type { State };
