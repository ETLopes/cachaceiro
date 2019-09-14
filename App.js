/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Picker, ScrollView} from 'react-native';
import {TextInput, Divider, Appbar} from 'react-native-paper';
import {TextInputMask} from 'react-native-masked-text';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      size: 1000,
    };
  }
  calculation(value, size, quantity) {
    const convertedValue = parseFloat(value.replace(/[^0-9.-]+/g, ''));
    return (((convertedValue / size) * quantity) / 100).toFixed(2);
  }
  render() {
    const volumes = [
      {recipient: 'Litrao 1000ml', quantity: 1000},
      {recipient: 'Garrafa 600ml', quantity: 600},
      {recipient: 'Garrafa Bud 550ml', quantity: 550},
      {recipient: 'Latão 473ml', quantity: 473},
      {recipient: 'Latão Colorado 410ml', quantity: 410},
      {recipient: 'Long Neck 355ml', quantity: 355},
      {recipient: 'Lata 350ml', quantity: 350},
      {recipient: 'Lata Stella 310ml', quantity: 310},
      {recipient: 'Litrinho 300ml', quantity: 300},
      {recipient: 'Long Neck Stella 275ml', quantity: 275},
      {recipient: 'Latinha 269ml', quantity: 269},
    ];

    return (
      <View style={styles.page}>
        <Appbar.Header style={styles.header}>
          <Appbar.Content title="Conversor de Cervejas" />
        </Appbar.Header>
        <View style={styles.body}>
          <Text>Digite o preço da cerveja:</Text>
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
            style={styles.valueInput}
          />
          <Text>Escolha o tamanho do vasilhame:</Text>
          <Picker
            selectedValue={this.state.size}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({size: itemValue})
            }
            style={styles.pickerStyle}>
            {volumes.map((volume, index) => (
              <Picker.Item
                key={index}
                label={volume.recipient}
                value={volume.quantity}
              />
            ))}
          </Picker>
          <Divider />
          <View style={styles.valuesArea}>
            {volumes.map((volume, index) => (
              <View style={styles.valueDisplayBox} k
              ey={index}>
                <TextInput
                  key={index}
                  style={styles.valueDisplay}
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
              </View>
            ))}
          </View>
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
    elevation: 4,
  },
  body: {
    flex: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  valueInput: {
    borderRadius: 5,
    borderWidth: 1,
    paddingLeft: 10,
  },
  pickerStyle: {
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#EEEEEE',
  },
  valuesArea: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  valueDisplayBox: {
    width: '48%',
    marginLeft: 5,
  },
  valueDisplay: {
    marginTop: 15,
    color: 'black'
  },
});

export default App;
