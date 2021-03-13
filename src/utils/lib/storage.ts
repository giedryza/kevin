class Storage {
  setItem = (key: string, value: any): void => {
    const item = JSON.stringify(value);

    localStorage.setItem(key, item);
  };

  getItem = <T = any>(key: string): T | null => {
    const item = localStorage.getItem(key);

    if (!item) return null;

    return JSON.parse(item);
  };
}

export const storage = new Storage();
