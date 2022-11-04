import React from 'react';
import {Box, Column, Row, Text} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

export const Transaction = (props: {
  text: string;
  isEntry: boolean;
  time: string;
}) => {
  return (
    <Row p={4} space={3}>
      <Column>
        {props.isEntry ? (
          <Box bg="green.300" p={4} rounded={5}>
            <FontAwesomeIcon icon="right-to-bracket" size={19} />
          </Box>
        ) : (
          <Box bg="orange.300" p={4} rounded={5}>
            <FontAwesomeIcon icon="right-from-bracket" size={19} />
          </Box>
        )}
      </Column>
      <Column>
        <Text>{props.text}</Text>
        <Text color="gray.400">{props.time}</Text>
      </Column>
    </Row>
  );
};
