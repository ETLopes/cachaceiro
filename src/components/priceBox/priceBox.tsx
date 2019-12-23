import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export interface Props {
  value: number;
}

const Pricebox: React.FC<Props> = props => {
  const normalizeValue = (value: number) => {
    if (value > 0) {
      return value;
    }
    return 0;
  };

  const {box} = styles;

  return (
    <View style={box}>
      <Text>R$ {props.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
  },
});

export default Pricebox;
