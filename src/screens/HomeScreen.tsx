import React from 'react';
import {Box} from 'native-base';
import {Wallet} from '../components/Wallet';
import {Title} from '../components/Title';
import {Transaction} from '../components/Transaction';
import {TransactionList} from '../components/TransactionList';

export const HomeScreen: React.FC = () => {
  return (
    <Box flex={1} safeAreaY safeAreaX={5} bg="#f3f2f8">
      <Title text="Wallet" />
      <Wallet />
      <Title text="Recent Trips" />
      <TransactionList>
        <Transaction text="Bopal" isEntry={false} time="10th June 2022" />
        <Transaction text="Bopal" isEntry time="10th June 2022" />
        <Transaction text="Navrangpura" isEntry={false} time="8th June 2022" />
        <Transaction text="Navrangpura" isEntry time="8th June 2022" />
        <Transaction text="Vastrapur" isEntry={false} time="3rd May 2022" />
        <Transaction text="Vastrapur" isEntry time="3rd May 2022" />
        <Transaction text="Bodakdev" isEntry={false} time="26th April 2022" />
        <Transaction text="Bodakdev" isEntry time="26th April 2022" />
      </TransactionList>
      {/* <Fab
        renderInPortal={false}
        shadow={5}
        size="lg"
        icon={<FontAwesomeIcon icon="key" color="white" size={20} />}
        label={
          <Text fontSize={17} fontWeight={500} color="white">
            Scan Key
          </Text>
        }
        // onPress={onOpen}
      /> */}
    </Box>
  );
};
