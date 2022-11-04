import {firebase} from '@react-native-firebase/database';

export const firebaseRealtimeDBRef = firebase
  .app()
  .database(
    'https://digipark-9a134-default-rtdb.asia-southeast1.firebasedatabase.app/',
  );
