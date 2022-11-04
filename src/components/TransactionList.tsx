import React, {Children} from 'react';
import {Box, Divider, ScrollView} from 'native-base';

export const TransactionList = (props: React.PropsWithChildren<{}>) => {
  const childrenArray = Children.toArray(props.children);

  return (
    <ScrollView flex={1}>
      <Box bg="white" rounded={15}>
        {childrenArray.map((element, index) => {
          return (
            <React.Fragment key={index}>
              {element}
              {index !== childrenArray.length - 1 && <Divider bg="muted.200" />}
            </React.Fragment>
          );
        })}
      </Box>
    </ScrollView>
  );
};
