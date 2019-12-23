import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export interface priceBoxProps {
  value: number;
  label: string;
}

const Pricebox = ({value, label}: priceBoxProps) => {
  return (
    <View style={styles.box}>
      <Text>{label}</Text>
      <Text>R$ {value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'gray',
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 5,
  },
  label: {
    marginBottom: 5,
    fontWeight: '800',
    fontSize: 14,
  },
});

export default Pricebox;
