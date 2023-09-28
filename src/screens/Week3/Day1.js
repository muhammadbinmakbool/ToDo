import {View, Text, ScrollView, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const Day1 = () => {
  return (
    <ScrollView style={{margin: 10}}>
      <View style={{backgroundColor: '#230b23', justifyContent: 'center'}}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'white',
            fontSize: 25,
          }}>
          Contacts App
        </Text>
      </View>
      <View style={{borderWidth: 1, borderRadius: 5, marginVertical: 5}}>
        <TextInput placeholder="Search" />
      </View>
      <Icon name={'delete-outline'} size={30} />
    </ScrollView>
  );
};

export default Day1;
