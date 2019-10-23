import React, {Component} from 'react';

import {StyleSheet, Text, TouchableOpacity, Linking} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

class ScanScreen extends Component {
  onSuccess = e => {
    if (e.type === 'QR_CODE') {
      Linking.openURL(e.data)
        .catch(err => console.error('An error occured', err))
        .finally(() => this.scanner.reactivate());
    } else {
      console.warn(e);
      this.scanner.reactivate();
    }
  };

  componentWillReceiveProps() {
    this.scanner.reactivate();
  }

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess}
        ref={node => {
          this.scanner = node;
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

ScanScreen.navigationOptions = {
  title: 'Conversor de Cerveja',
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default ScanScreen;
