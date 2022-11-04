import {
  Box,
  Center,
  Text,
  Input,
  KeyboardAvoidingView,
  Button,
  Row,
} from 'native-base';
import React from 'react';
import {Title} from '../components/Title';
import {useNavigate} from 'react-router-native';
import {firebaseRealtimeDBRef} from '../services/firebase';

const checkIfKeyExists = (value: string) => {
  firebaseRealtimeDBRef
    .ref('/digipark/uid/')
    .once(value)
    .then((snapshot: {val: () => any}) => {
      console.log('User data: ', snapshot.val());
    });
};

export const RechargeScreen: React.FC = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState('');
  const handleChange = (text: React.SetStateAction<string>) => setValue(text);

  return (
    <Box flex={1} safeAreaY safeAreaX={5} bg="#f3f2f8">
      <KeyboardAvoidingView>
        <Center>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Title text="Key ID" />
          </Box>
          <Box h={60} px={4} alignItems="center">
            <Input
              mx="3"
              placeholder="Enter Key ID"
              value={value}
              w="100%"
              onChangeText={handleChange}
            />
          </Box>
          <Row space={5}>
            <Button
              rounded="full"
              backgroundColor="indigo.500"
              onPress={() => checkIfKeyExists(value)}>
              <Text color="white" fontWeight={700}>
                Continue
              </Text>
            </Button>
          </Row>
        </Center>
      </KeyboardAvoidingView>
    </Box>
  );
};
