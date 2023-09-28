import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import SearchList from './SearchList';
import AddContact from './AddContact';
import ContactCard from './ContactCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Task1 = ({navigation}) => {
  // Contacts Array
  const [contacts, setContacts] = useState([
    {name: 'Muhammad', number: '03329010686'},
    {name: 'Ahmad', number: '03015922775'},
  ]);
  const [searchList, setSearchList] = useState([]);
  const [storedContacts, setStoredContacts] = useState(false);

  //   Delete Contact
  const deleteContact = useCallback(
    index => {
      const updatedContacts = [...contacts];
      updatedContacts.splice(index, 1);
      setContacts(updatedContacts);
    },
    [contacts, setContacts],
  );

  const asyncStorageContact = async () => {
    try {
      for (let i = 0; i < contacts.length; i++) {
        AsyncStorage.setItem(
          contacts[i].toString(),
          JSON.stringify(contacts[i]),
        );
      }
      setStoredContacts(true);
    } catch (error) {
      console.log('Error While Storing the Contact');
    }
  };

  useEffect(() => {
    if (!storedContacts) {
      asyncStorageContact();
    }
  }, [storedContacts]);

  ///////////////////////
  const storedContact = async () => {
    try {
      let latestIndex = contacts.length - 1;
      const getContact = await AsyncStorage.getItem(latestIndex.toString());
      if (getContact !== null) {
        console.log('data Exist', getContact);
      } else {
        console.log("data don't exist");
      }
    } catch (error) {
      console.log('====ERROR====');
    }
  };

  //   Re-render Search List When Contacts Update
  useEffect(() => {
    setSearchList([...contacts]);
    storedContact();
  }, [contacts]);

  return (
    <ScrollView style={{margin: 10}}>
      {/* Title */}
      <View style={style.titleBackground}>
        <Text style={style.titleText}>Contacts List</Text>
      </View>

      {/* Search Block */}
      <SearchList contacts={contacts} filteredList={setSearchList} />

      {/* Display Contacts */}
      {searchList.map((item, index) => {
        return (
          <ContactCard
            contact={item}
            deleteContact={deleteContact}
            index={index}
            key={index}
          />
        );
      })}

      {/* Add Contact Block */}
      <AddContact contacts={contacts} updateContacts={setContacts} />

      <TouchableOpacity
        style={style.titleBackground}
        onPress={() => navigation.navigate('Home')}>
        <Text style={style.titleText}>PRESS ME</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Task1;

const style = StyleSheet.create({
  titleBackground: {
    justifyContent: 'center',
    backgroundColor: '#4D5656',
    height: 30,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
