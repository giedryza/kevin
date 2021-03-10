type NodeEnv = 'production' | 'development' | 'test';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: NodeEnv;
      REACT_APP_UNSPLASH_ACCESS_KEY: string;
    }
  }
}

declare type AnyFunction = (...args: any[]) => any;
