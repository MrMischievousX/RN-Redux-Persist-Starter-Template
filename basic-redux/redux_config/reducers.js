const initialState = { backgroundColor: 'red' };
import AsyncStorage from '@react-native-async-storage/async-storage';

export const reducer = (state = initialState, action) => {
  AsyncStorage.getItem('persist:root').then((data) => console.log(data));
  switch (action.type) {
    case 'changeBackground':
      return { ...state, backgroundColor: action.payload };
    default:
      return state;
  }
};

// Setting Persist Data
// AsyncStorage.getItem('persist:root').then((data) =>
// AsyncStorage.setItem('persist:root', { ...data, backgroundColor: `"red"` })
// );

// Getting Persist Data
// AsyncStorage.getItem('persist:root').then((data) => console.log(data));
