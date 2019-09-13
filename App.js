/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Picker} from 'react-native';
import {TextInput, Divider} from 'react-native-paper';
import {TextInputMask} from 'react-native-masked-text';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      size: '',
    };
  }
  calculation(value, size, quantity) {
    const convertedValue = parseFloat(value.replace(/[^0-9.-]+/g, ''));
    return (((convertedValue / size) * quantity) / 100).toFixed(2);
  }
  render() {
    const volumes = [
      {recipient: 'litrao 1000ml', quantity: 1000},
      {recipient: 'garrafa 600ml', quantity: 600},
      {recipient: 'lata 350ml', quantity: 350},
      {recipient: 'latinha 269ml', quantity: 269},
    ];

    return (
      <View style={styles.page}>
        <View style={styles.header}>
          <Text>Conversor de preço para cervejas</Text>
        </View>
        <View style={styles.body}>
          <TextInputMask
            label={'preço'}
            type={'money'}
            value={this.state.value}
            onChangeText={value => {
              this.setState({
                value,
              });
            }}
            ref={ref => (this.moneyField = ref)}
          />
          <Picker
            selectedValue={this.state.size}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({size: itemValue})
            }
            style={styles.pickerStyle}>
            <Picker.Item label="Piriguete" value={269} />
            <Picker.Item label="Normal" value={350} />
          </Picker>
          <Divider />
          {volumes.map((volume, index) => (
            <TextInput
              key={index}
              mode="outlined"
              label={volume.recipient}
              value={
                'R$' +
                this.calculation(
                  this.state.value,
                  this.state.size,
                  volume.quantity,
                )
              }
              disabled
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {
    flex: 2,
  },
  body: {
    flex: 10,
  },
  pickerStyle: {
    borderWidth: 1,
    backgroundColor: '#EEEEEE',
    borderRadius: 20,
  },
});

export default App;
