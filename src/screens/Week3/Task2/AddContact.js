import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useState, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddContact = ({contacts, updateContacts}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const newContacts = useCallback(
    async (name, number, index) => {
      try {
        const newContact = {name, number};
        const updatecontacts = [...contacts, newContact];
        updateContacts(updatecontacts);
        setName('');
        setNumber('');
        const contactsdata = JSON.stringify(updatecontacts);
        // let latestIndex = updatecontacts.length - 1;
        await AsyncStorage.setItem('@contacts', contactsdata);
      } catch (error) {
        console.log('Error Saving');
      }
    },
    [name, number, contacts, setName, setNumber, updateContacts],
  );

  return (
    <View>
      {/* Input Fields */}
      <View>
        <TextInput
          style={style.textInput}
          placeholder="Enter Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={style.textInput}
          placeholder="Enter Number"
          keyboardType="number-pad"
          value={number}
          onChangeText={setNumber}
        />
      </View>

      {/* Add Button */}
      <TouchableOpacity
        style={style.buttonStyle}
        onPress={() => {
          const latestIndex = contacts.length - 1;
          newContacts(name, number, latestIndex);
        }}>
        <Text style={style.buttonText}>Add Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddContact;

const style = StyleSheet.create({
  textInput: {margin: 5, borderWidth: 1, borderRadius: 5},
  buttonStyle: {
    justifyContent: 'center',
    backgroundColor: '#212F3C',
    margin: 5,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    paddingVertical: 5,
    fontSize: 20,
  },
});
