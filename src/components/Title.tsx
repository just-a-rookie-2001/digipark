import React from 'react';
import {Text} from 'native-base';

export const Title: React.FC<{text: string}> = (props: {text: string}) => {
  return (
    <Text color="black" fontWeight={700} fontSize="4xl">
      {props.text}
    </Text>
  );
};
