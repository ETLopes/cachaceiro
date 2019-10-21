import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Picker,
  KeyboardAvoidingView,
} from 'react-native';
import {TextInput, Divider} from 'react-native-paper';
import {TextInputMask} from 'react-native-masked-text';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      size: 0,
    };
  }

  calculatePrice(value, size, quantity) {
    if (size === 0 || value === 0) {
      return 0;
    }
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
      <KeyboardAvoidingView style={styles.page}>
        <View style={styles.header}>
          <Text>Digite o preço da cerveja:</Text>
          <TextInputMask
            label={'preço'}
            type={'money'}
            value={this.state.value}
            keyboardType={'phone-pad'}
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
            <Picker.Item label="Escolha um tamanho" value={0} />
            {volumes.map((volume, index) => (
              <Picker.Item
                key={index}
                label={volume.recipient}
                value={volume.quantity}
              />
            ))}
          </Picker>
        </View>
        <Divider />
        <View style={styles.body}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            {volumes.map((volume, index) => (
              <View key={index} style={styles.valueDisplay}>
                <TextInput
                  key={index}
                  mode="outlined"
                  label={volume.recipient}
                  value={this.calculatePrice(
                    this.state.value,
                    this.state.size,
                    volume.quantity,
                  )}
                  disabled
                />
              </View>
            ))}
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    marginTop: 5,
    marginLeft: 1,
    marginRight: 1,
    paddingLeft: 5,
    paddingRight: 5,
  },
  header: {
    flex: 2.3,
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5,
  },
  body: {
    flex: 8,
    marginTop: 10,
  },
  valueInput: {
    borderRadius: 5,
    paddingLeft: 10,
    borderWidth: 1,
  },
  pickerStyle: {
    borderRadius: 5,
    backgroundColor: '#EEE',
  },
  scrollView: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  valueDisplay: {
    marginTop: 5,
    color: 'black',
    width: '48%',
  },
});

Home.navigationOptions = {
  title: 'Conversor de Cerveja',
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default Home;
