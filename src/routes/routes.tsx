import React from 'react';
import {Route, Routes} from 'react-router-native';
import {HomeScreen} from '../screens/HomeScreen';

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
    </Routes>
  );
};
