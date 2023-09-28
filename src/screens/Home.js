import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Details Screen"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Contacts Screen"
        onPress={() => navigation.navigate('Contacts')}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
