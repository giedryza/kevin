import qs, { ParsedQuery } from 'query-string';

type Params = ParsedQuery<string>;

class Router {
  stringifyParams = (params: Record<string, string | number>) =>
    qs.stringify(params, { skipNull: true, skipEmptyString: true });

  parseParams = (search: string): Params => qs.parse(search);
}

export const router = new Router();
