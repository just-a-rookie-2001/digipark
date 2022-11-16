import {
  Box,
  Center,
  Text,
  Input,
  KeyboardAvoidingView,
  Button,
  Row,
} from 'native-base';
import React, {useState} from 'react';
import {Title} from '../components/Title';
import {useNavigate} from 'react-router-native';
import {registerWithEmailAndPassword} from '../services/user';

export const RegistrationScreen: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onRegisterButtonPress = () => {
    registerWithEmailAndPassword(email, password).then(() =>
      navigate('/login'),
    );
  };

  return (
    <Box flex={1} safeAreaY safeAreaX={5} bg="#f3f2f8">
      <KeyboardAvoidingView>
        <Center>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Title text="Register" />
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
              onPress={() => navigate('/login')}>
              <Text color="white" fontWeight={700}>
                Login
              </Text>
            </Button>
            <Button
              rounded="full"
              backgroundColor="indigo.500"
              onPress={onRegisterButtonPress}>
              <Text color="white" fontWeight={700}>
                Register
              </Text>
            </Button>
          </Row>
        </Center>
      </KeyboardAvoidingView>
    </Box>
  );
};
