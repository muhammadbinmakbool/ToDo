import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

// Similar To Task7 using TypeScript
interface contact {
  name: string;
  phone: string;
}

const Contacts = () => {
  const [contacts, updateContacts] = useState<contact[]>([]);
  const [searchList, updateSearchList] = useState<contact[]>([]);
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    updateSearchList([...contacts]);
  }, [contacts]);

  const saveContact = useCallback(() => {
    const newContactsArray = [...contacts, {name, phone}];
    updateContacts(newContactsArray);
    setName('');
    setPhone('');
  }, [contacts, name, phone, updateContacts, setName, setPhone]);

  const searchData = useCallback(() => {
    const filteredContacts = contacts.filter(
      item => item.name.toLocaleUpperCase() === search.toLocaleUpperCase(),
    );
    updateSearchList([...filteredContacts]);
  }, [contacts, search, updateSearchList]);

  return (
    <View>
      <TextInput
        style={{backgroundColor: '#f8f8f8', borderWidth: 1}}
        value={search}
        onChangeText={v => {
          setSearch(v);
        }}
      />
      <TouchableOpacity onPress={() => searchData()}>
        <Text>Search</Text>
      </TouchableOpacity>

      <TextInput
        style={{backgroundColor: '#f8f8f8', borderWidth: 1}}
        value={name}
        onChangeText={v => {
          setName(v);
        }}
      />
      <TextInput
        style={{backgroundColor: '#f8f8f8', borderWidth: 1}}
        value={phone}
        onChangeText={v => {
          setPhone(v);
        }}
      />
      <TouchableOpacity onPress={() => saveContact()}>
        <Text>Add Contact</Text>
      </TouchableOpacity>

      {searchList.map((item, index) => {
        return (
          <View key={index}>
            <Text>{item.name}</Text>
            <Text>{item.phone}</Text>
          </View>
        );
      })}
      {/* <FlatList

      /> */}
    </View>
  );
};

export default Contacts;
