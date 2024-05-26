import AsyncStorage from '@react-native-async-storage/async-storage';

interface Storage {
  getItem: (key: string) => Promise<any>;
  setItem: (key: string, value: any) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
}

export const asyncStorage: Storage = {
  getItem: async key => {
    const item = await AsyncStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  },

  setItem: async (key, value) => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  },

  removeItem: async key => {
    await AsyncStorage.removeItem(key);
  },
};
