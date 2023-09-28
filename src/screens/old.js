import {StyleSheet, Text, ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import * as Animatable from 'react-native-animatable';

const App = () => {
  const [contacts, setContacts] = useState([
    {name: 'Asad', phone: '030312345678'},
    {name: 'Umar', phone: '03034557667'},
    {name: 'Ahmad', phone: '03034557667'},
  ]);

  return (
    <ScrollView>
      {contacts.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              backgroundColor: '#dddddd',
              marginVertical: 10,
              marginHorizontal: 20,
              padding: 20,
              borderRadius: 5,
            }}>
            <Text>{item.name}</Text>
            <Text>{item.phone}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({});

{
  /*  */
}
