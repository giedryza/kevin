import { Action, NormalisedValues } from 'utils/redux/types';

export function createAction<T extends string>(type: T): Action<T>;
export function createAction<T extends string, P>(
  type: T,
  payload: P
): Action<T, P>;
export function createAction<T extends string, P>(type: T, payload?: P) {
  const action = payload === undefined ? { type } : { type, payload };

  return action;
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
