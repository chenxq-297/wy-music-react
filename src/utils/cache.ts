enum CacheType {
  local = 'local',
  session = 'session',
}

class LocalCache {
  storage: Storage;
  constructor(type: CacheType) {
    this.storage = type === CacheType.local ? localStorage : sessionStorage;
  }

  setCache(key: string, value: any) {
    if (value === undefined) {
      return;
    }
    this.storage.setItem(key, JSON.stringify(value));
  }

  getCache(key: string) {
    const value = this.storage.getItem(key);

    if (value) {
      return JSON.parse(value);
    }
  }

  delecteCache(key: string) {
    this.storage.removeItem(key);
  }

  clearCache() {
    this.storage.clear();
  }
}

const localCache = new LocalCache(CacheType.local);

export default localCache;
