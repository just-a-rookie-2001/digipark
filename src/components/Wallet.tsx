import React, {useEffect, useState} from 'react';
import {Button, Column, Flex, Row, Text} from 'native-base';
import {useNavigate} from 'react-router-native';
import {db} from '../services/firebase';
import {ref, child, get} from 'firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Wallet: React.FC = () => {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(0);
  const [key, setKey] = useState('');
  const dbRef = ref(db);

  useEffect(() => {
    const fetchKey = async () => {
      const k = await AsyncStorage.getItem('@KEY_ID');
      if (k) {
        setKey(k);
      }
    };
    fetchKey();
    console.log('key:', key);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    get(child(dbRef, `/digipark/uid/${key}/balance`))
      .then(snapshot => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setBalance(snapshot.val());
        } else {
          console.log('No data available');
        }
      })
      .catch(error => {
        console.error(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return (
    <Flex
      direction="column"
      justify="space-between"
      rounded="15"
      bg="indigo.400"
      shadow="3"
      p="5"
      maxHeight={250}
      flex={1}>
      <Column>
        <Text color="white">Balance</Text>
        <Text color="white" fontSize="4xl">
          ₹{balance}
        </Text>
      </Column>
      <Row justifyContent="flex-end">
        <Button
          rounded="full"
          backgroundColor="indigo.300"
          onPress={() => navigate('/recharge')}>
          <Text color="white" fontWeight={700}>
            Recharge
          </Text>
        </Button>
      </Row>
    </Flex>
  );
};
