import {Box, Button, Center, Flex, ScrollView} from 'native-base';
import React, {useState, useEffect} from 'react';
import {Title} from '../components/Title';
import {useNavigate} from 'react-router-native';
import {db} from '../services/firebase';
import {ref, onValue, off} from 'firebase/database';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

export const ParkingScreen: React.FC = () => {
  const navigate = useNavigate();
  const [parkingStatus, setParkingStatus] = useState<Boolean[]>([]);

  useEffect(() => {
    setParkingStatus([]);
    onValue(
      ref(db, '/digipark/sensor'),
      snapshot => {
        let list: Boolean[] = [];
        snapshot.forEach(childSnapshot => {
          list.push(childSnapshot.val());
        });
        setParkingStatus(list);
        console.log(parkingStatus);
      },
      {
        onlyOnce: false,
      },
    );

    return () => {
      off(ref(db, '/digipark/sensor'));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box flex={1} safeAreaY safeAreaX={5} bg="#f3f2f8">
      <Center>
        <Box w="100%" h={120} px={4} justifyContent="center">
          <Title text="Parking Status" />
          <Button onPress={() => navigate('/')}>Back</Button>
        </Box>
        <ScrollView>
          <Flex
            direction="row"
            mt="5"
            flexWrap={'wrap'}
            justifyContent={'center'}>
            {parkingStatus.map((spot, i) => {
              return (
                <Center
                  size="32"
                  bg="coolGray.300"
                  m="3.5"
                  key={i}
                  borderRadius="20">
                  <FontAwesomeIcon
                    icon="parking"
                    size={64}
                    color={!spot ? 'green' : 'red'}
                  />
                  {`Parking #${i + 1}`}
                </Center>
              );
            })}
          </Flex>
        </ScrollView>
      </Center>
    </Box>
  );
};
