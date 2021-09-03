import React, {useState} from 'react';
import Slider from '@react-native-community/slider';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import Cxtx from './components/CaixadeTexto';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Opeeeeen up Aaaaaaaaaaaaaaaaaaaaaaaapp.js to start working on your app!</Text>
      <Cxtx/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
