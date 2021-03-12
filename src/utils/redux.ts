import { Action } from 'state/types';

export function createAction<T extends string>(type: T): Action<T>;
export function createAction<T extends string, P>(
  type: T,
  payload: P
): Action<T, P>;
export function createAction<T extends string, P>(type: T, payload?: P) {
  const action = payload === undefined ? { type } : { type, payload };

  return action;
}

export interface NormalisedValues<T> {
  ids: string[];
  byId: Record<string, T>;
}

const normaliseValue = <T extends { id: string }>(
  state: NormalisedValues<T>,
  record: T
): NormalisedValues<T> => {
  const id = <string>record.id;

  return {
    ids: [...state.ids, id],
    byId: {
      ...state.byId,
      [id]: { ...record },
    },
  };
};

export const normaliseValues = <T extends { id: string }>(values: T[]) =>
  values.reduce(normaliseValue, <NormalisedValues<T>>{
    ids: [],
    byId: {},
  });
