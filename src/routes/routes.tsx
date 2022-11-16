import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-native';
import {HomeScreen} from '../screens/HomeScreen';
import {LoginScreen} from '../screens/LoginScreen';
import {ParkingScreen} from '../screens/ParkingScreen';
import {RechargeScreen} from '../screens/RechargeScreen';
import {RegistrationScreen} from '../screens/RegistrationScreen';

export const Router: React.FC = () => {
  const [key, setKey] = useState('');

  useEffect(() => {
    const fetchKey = async () => {
      const k = await AsyncStorage.getItem('@KEY_ID');
      if (k) {
        setKey(k);
        console.log('key:', k);
      }
    };
    fetchKey();
  }, []);

  return (
    <Routes>
      {key.length === 8 ? (
        <>
          <Route path="/" element={<HomeScreen setAsyncKey={setKey} />} />
          <Route path="/park" element={<ParkingScreen />} />
          <Route path="/recharge" element={<RechargeScreen />} />
        </>
      ) : (
        <>
          <Route path="/" element={<RegistrationScreen />} />
          <Route path="/login" element={<LoginScreen setAsyncKey={setKey} />} />
        </>
      )}
    </Routes>
  );
};
