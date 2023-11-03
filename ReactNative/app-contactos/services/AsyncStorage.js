import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = (key, value) => {
  return new Promise(async (resolve, reject) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
      resolve(true)
    } catch (e) {
      // saving error
    }
  })
  
};

const getData = async (key) => {
  return new Promise(async (resolve, reject) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // value previously stored
        return resolve(JSON.parse(value))
      }
    } catch (e) {
      // error reading value
    }
  })
  
};

const clearAll = async () => {
  try {
    await AsyncStorage.clear()
  } catch(e) {
    // clear error
  }
}

export default {
  getData,
  storeData,
  clearAll
}