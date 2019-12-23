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

import calculatePrice from './calculator/calculator';
import beerList from './variables/beerList';
import Pricebox from './components/priceBox/priceBox';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      size: 0,
    };
  }

  render() {
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
            {beerList.map((beer, index) => (
              <Picker.Item key={index} label={beer.label} value={beer.value} />
            ))}
          </Picker>
        </View>
        <Divider />
        <View style={styles.body}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            {beerList.map((beer, index) => (
              <View key={index} style={styles.valueDisplay}>
                <Pricebox
                  key={index}
                  label={beer.label}
                  value={calculatePrice(
                    this.state.value,
                    this.state.size,
                    beer.value,
                  )}
                />
                {/* <TextInput
                  key={index}
                  mode="outlined"
                  label={beer.label}
                  value={calculatePrice(
                    this.state.value,
                    this.state.size,
                    beer.value,
                  )}
                  disabled
                /> */}
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
    flex: 2.5,
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
