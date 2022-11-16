import {
  Box,
  Center,
  Text,
  Input,
  KeyboardAvoidingView,
  Button,
  Row,
} from 'native-base';
import React, {Dispatch, SetStateAction, useState} from 'react';
import {Title} from '../components/Title';
import {useNavigate} from 'react-router-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {logInWithEmailAndPassword} from '../services/user';
import {db} from '../services/firebase';
import {ref, child, get} from 'firebase/database';

export const LoginScreen: React.FC<{
  setAsyncKey: Dispatch<SetStateAction<string>>;
}> = ({setAsyncKey}) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dbRef = ref(db);

  const onLoginButtonPress = () => {
    logInWithEmailAndPassword(email, password)
      .then(response => {
        get(child(dbRef, `/digipark/user/${response?.user.uid}`)).then(
          snapshot => {
            if (snapshot.exists()) {
              console.log(snapshot.val());
              const key = snapshot.val().key;
              AsyncStorage.setItem('@KEY_ID', key);
              setAsyncKey(key);
              navigate('/');
              // setBalance(snapshot.val());
            } else {
              console.log('No data available');
            }
          },
        );
      })
      .catch(error => {
        console.log(error);
      });

    // TODO: fetch the key of the user with specified email
  };

  return (
    <Box flex={1} safeAreaY safeAreaX={5} bg="#f3f2f8">
      <KeyboardAvoidingView>
        <Center>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Title text="Login" />
          </Box>
          <Box display={'flex'} px={4} alignItems="center" my="5">
            <Input
              value={email}
              onChangeText={text => {
                setEmail(text);
              }}
              mx="3"
              my="1"
              placeholder="Enter email"
              w="100%"
            />
            <Input
              value={password}
              onChangeText={text => {
                setPassword(text);
              }}
              mx="3"
              placeholder="Enter password"
              w="100%"
              type="password"
            />
          </Box>
          <Row space={5}>
            <Button
              rounded="full"
              backgroundColor="red.300"
              onPress={() => navigate('/')}>
              <Text color="white" fontWeight={700}>
                Register
              </Text>
            </Button>
            <Button
              rounded="full"
              backgroundColor="indigo.500"
              onPress={onLoginButtonPress}>
              <Text color="white" fontWeight={700}>
                Login
              </Text>
            </Button>
          </Row>
        </Center>
      </KeyboardAvoidingView>
    </Box>
  );
};
