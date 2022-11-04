import {Actionsheet, Box, Center, Text} from 'native-base';
import React from 'react';

export const RechargeActionSheet = (props: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  //   const {isOpen, onOpen, onClose} = useDisclose();

  return (
    <Center>
      {/* <Button onPress={onOpen}>Actionsheet</Button> */}
      <Actionsheet isOpen={props.isOpen} onClose={props.onClose}>
        <Actionsheet.Content>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text
              fontSize="16"
              color="gray.500"
              _dark={{
                color: 'gray.300',
              }}>
              Albums
            </Text>
          </Box>
          <Actionsheet.Item>Delete</Actionsheet.Item>
          <Actionsheet.Item isDisabled>Share</Actionsheet.Item>
          <Actionsheet.Item>Play</Actionsheet.Item>
          <Actionsheet.Item>Favourite</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  );
};
