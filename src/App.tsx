import React from 'react';
import {NativeBaseProvider, extendTheme} from 'native-base';
import {Router} from './routes/routes';
import {NativeRouter} from 'react-router-native';
import {changeBarColors} from 'react-native-immersive-bars';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faRightToBracket} from '@fortawesome/free-solid-svg-icons/faRightToBracket';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons/faRightFromBracket';
import {faKey} from '@fortawesome/free-solid-svg-icons/faKey';
library.add(faRightToBracket, faRightFromBracket, faKey);

const newColorTheme = {
  brand: {
    900: '#8287AF',
    800: '#7c83db',
    700: '#b3bef6',
  },
};
const theme = extendTheme({colors: newColorTheme});

export default function App() {
  const isDarkMode = false;

  React.useEffect(() => {
    changeBarColors(isDarkMode, 'transparent', 'transparent');
  }, [isDarkMode]);

  return (
    <NativeBaseProvider theme={theme}>
      <NativeRouter>
        <Router />
      </NativeRouter>
    </NativeBaseProvider>
  );
}
