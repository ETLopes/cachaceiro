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
      tamanho: '',
    };
  }

  render() {
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
            selectedValue={this.state.tamanho}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({tamanho: itemValue})
            }
            style={styles.pickerStyle}>
            <Picker.Item label="Piriguete" value={269} />
            <Picker.Item label="Normal" value={350} />
          </Picker>
          <Divider />
          <TextInput
            mode="outlined"
            label="Litrão"
            value={
              ('R$' + ((this.moneyField.getRawValue() / this.state.tamanho) * 1000))
            }
            disabled
          />
          <Text>{this.moneyField.getRawValue()}</Text>
          <Text>{this.state.tamanho}</Text>
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
