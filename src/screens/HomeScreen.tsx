import React from 'react';
import {Box, Fab, Text, useDisclose} from 'native-base';
import {Wallet} from '../components/Wallet';
import {Title} from '../components/Title';
import {Transaction} from '../components/Transaction';
import {TransactionList} from '../components/TransactionList';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {RechargeActionSheet} from '../components/NfcScanActionSheet';

export const HomeScreen: React.FC = () => {
  const {isOpen, onOpen, onClose} = useDisclose();

  return (
    <Box flex={1} safeAreaY safeAreaX={5} bg="#f3f2f8">
      <Title text="Wallet" />
      <Wallet />
      <Title text="Recent Trips" />
      <TransactionList>
        <Transaction text="test" isEntry time="10th June 2022" />
        <Transaction text="test123" isEntry={false} time="10th June 2022" />
        <Transaction text="test" isEntry time="10th June 2022" />
        <Transaction text="test123" isEntry={false} time="10th June 2022" />
        <Transaction text="test" isEntry time="10th June 2022" />
        <Transaction text="test123" isEntry={false} time="10th June 2022" />
        <Transaction text="test" isEntry time="10th June 2022" />
        <Transaction text="test123" isEntry={false} time="10th June 2022" />
      </TransactionList>
      <Fab
        renderInPortal={false}
        shadow={5}
        size="lg"
        icon={<FontAwesomeIcon icon="key" color="white" size={20} />}
        label={
          <Text fontSize={17} fontWeight={500} color="white">
            Scan Key
          </Text>
        }
        onPress={onOpen}
      />
      <RechargeActionSheet isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
