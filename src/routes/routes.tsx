import React from 'react';
import {Route, Routes} from 'react-router-native';
import {HomeScreen} from '../screens/HomeScreen';
import {RechargeScreen} from '../screens/RechargeScreen';

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/recharge" element={<RechargeScreen />} />
      <Route path="/key" element={<HomeScreen />} />
    </Routes>
  );
};
