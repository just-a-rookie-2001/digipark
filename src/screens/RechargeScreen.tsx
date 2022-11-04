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

export const RechargeScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box flex={1} safeAreaY safeAreaX={5} bg="#f3f2f8">
      <KeyboardAvoidingView>
        <Center>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Title text="Recharge" />
          </Box>
          <Box h={60} px={4} alignItems="center">
            <Input mx="3" placeholder="Enter recharge amount" w="100%" />
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
              onPress={() => navigate('/')}>
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
