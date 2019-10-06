/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Button, Text} from 'react-native';

const About = ({navigation}) => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Sobre nós</Text>
    <Button
      title="Ir para Home"
      onPress={() => navigation.navigate('Home')}
    />
  </View>
);

About.navigationOptions = {
  title: 'About',
};

export default About;
