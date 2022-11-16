import React, {Dispatch, SetStateAction} from 'react';
import {Box, Button, Fab, Flex, Text} from 'native-base';
import {Wallet} from '../components/Wallet';
import {Title} from '../components/Title';
import {Transaction} from '../components/Transaction';
import {TransactionList} from '../components/TransactionList';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigate} from 'react-router-native';
import {logout} from '../services/user';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const HomeScreen: React.FC<{
  setAsyncKey: Dispatch<SetStateAction<string>>;
}> = ({setAsyncKey}) => {
  const navigate = useNavigate();

  return (
    <Box flex={1} safeAreaY safeAreaX={5} bg="#f3f2f8">
      <Flex direction="row" justifyContent={'space-between'} my="2">
        <Title text="Wallet" />
        <Button
          colorScheme="secondary"
          onPress={() => {
            logout();
            AsyncStorage.setItem('@KEY_ID', '');
            setAsyncKey('');
          }}>
          Log Out
        </Button>
      </Flex>
      <Wallet />

      <Flex direction="row" my="2">
        <Title text="Recent Trips" />
      </Flex>
      <TransactionList>
        <Transaction text="Bopal" isEntry={false} time="10th November 2022" />
        <Transaction text="Bopal" isEntry time="10th November 2022" />
        <Transaction
          text="Navrangpura"
          isEntry={false}
          time="8th November 2022"
        />
        <Transaction text="Navrangpura" isEntry time="8th November 2022" />
        <Transaction text="Vastrapur" isEntry={false} time="3rd October 2022" />
        <Transaction text="Vastrapur" isEntry time="3rd October 2022" />
        <Transaction
          text="Bodakdev"
          isEntry={false}
          time="26th September 2022"
        />
        <Transaction text="Bodakdev" isEntry time="26th September 2022" />
      </TransactionList>
      <Fab
        renderInPortal={false}
        shadow={5}
        size="lg"
        icon={<FontAwesomeIcon icon="parking" color="white" size={20} />}
        label={
          <Text fontSize={17} fontWeight={500} color="white">
            Parking
          </Text>
        }
        onPress={() => navigate('/park')}
      />
      <Fab
        renderInPortal={true}
        shadow={5}
        size="lg"
        icon={<FontAwesomeIcon icon="parking" color="white" size={20} />}
        label={
          <Text fontSize={17} fontWeight={500} color="white">
            Parking
          </Text>
        }
        onPress={() => navigate('/park')}
      />
    </Box>
  );
};
