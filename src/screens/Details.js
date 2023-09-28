import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Details = ({navigation}) => {
  return (
    <View>
      <Text>Details</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
