import React from 'react';
import {Button, Column, Flex, Row, Text} from 'native-base';

export const Wallet: React.FC = () => {
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
          $300.30
        </Text>
      </Column>
      <Row justifyContent="flex-end">
        <Button rounded="full" backgroundColor="indigo.300">
          <Text color="white" fontWeight={700}>
            Recharge
          </Text>
        </Button>
      </Row>
    </Flex>
  );
};
