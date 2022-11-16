import {
  Box,
  Center,
  Text,
  Input,
  KeyboardAvoidingView,
  Button,
  Row,
} from 'native-base';
import React, {useState, useEffect} from 'react';
import {Title} from '../components/Title';
import {useNavigate} from 'react-router-native';
import {db} from '../services/firebase';
import {ref, update, get, child} from 'firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const RechargeScreen: React.FC = () => {
  const navigate = useNavigate();
  const [balance, setBalance] = useState('');
  const [key, setKey] = useState('');

  useEffect(() => {
    const fetchKey = async () => {
      const k = await AsyncStorage.getItem('@KEY_ID');
      if (k) {
        setKey(k);
      }
    };
    fetchKey();
    console.log('recharge key:', key);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRechargeButtonPress = () => {
    let bal = 0;
    if (!isNaN(+balance)) {
      get(child(ref(db), `/digipark/uid/${key}/balance`))
        .then(snapshot => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
            bal = snapshot.val();
          } else {
            console.log('No data available');
          }
        })
        .catch(error => {
          console.error(error);
        })
        .then(() => {
          bal += +balance;
          let data = {};
          data[`/digipark/uid/${key}/balance`] = bal;
          update(ref(db), data);
          navigate('/');
        });
    }
  };

  return (
    <Box flex={1} safeAreaY safeAreaX={5} bg="#f3f2f8">
      <KeyboardAvoidingView>
        <Center>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Title text="Recharge" />
          </Box>
          <Box h={60} px={4} alignItems="center">
            <Input
              value={balance}
              onChangeText={text => {
                setBalance(text);
              }}
              mx="3"
              placeholder="Enter recharge amount"
              w="100%"
            />
          </Box>
          <Row space={5}>
            <Button
              rounded="full"
              backgroundColor="red.300"
              onPress={() => navigate('/')}>
              <Text color="white" fontWeight={700}>
                Cancel
              </Text>
            </Button>
            <Button
              rounded="full"
              backgroundColor="indigo.500"
              onPress={onRechargeButtonPress}>
              <Text color="white" fontWeight={700}>
                Recharge
              </Text>
            </Button>
          </Row>
        </Center>
      </KeyboardAvoidingView>
    </Box>
  );
};
