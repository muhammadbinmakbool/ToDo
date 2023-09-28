import {
  TextInput,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const Task1 = () => {
  // Contacts Array
  const [contacts, setContacts] = useState([
    {name: 'Muhammad', number: '03329010686'},
    {name: 'Ahmad', number: '03015922775'},
  ]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [search, setSearch] = useState('');
  const [searchList, setSearchList] = useState([]);

  // Update Array
  const newContacts = useCallback(
    (name, number) => {
      const newContact = {name, number};
      const updatecontacts = [...contacts, newContact];
      setContacts(updatecontacts);
      setName('');
      setNumber('');
    },
    [name, number, contacts, setName, setNumber, setContacts],
  );

  //   Search Contact
  const searchContact = useCallback(() => {
    const updateSearchList = contacts.filter(item => {
      return item.name.toLocaleUpperCase() === search.toLocaleUpperCase();
    });
    setSearchList([...updateSearchList]);
    setSearch('');
  }, [contacts, search, setSearchList]);

  //   Delete Contact
  const deleteContact = useCallback(
    index => {
      const updatedContacts = [...contacts];
      updatedContacts.splice(index, 1);
      setContacts(updatedContacts);
    },
    [contacts, setContacts],
  );

  //   Re-render Search List When Contacts Update
  useEffect(() => {
    setSearchList([...contacts]);
  }, [contacts]);

  return (
    <ScrollView style={{margin: 10}}>
      {/* Title */}
      <View
        style={{
          justifyContent: 'center',
          backgroundColor: '#4D5656',
          height: 30,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
          }}>
          Contacts List
        </Text>
      </View>

      {/* Search Block */}
      <View>
        {/* Search Title */}
        <Text style={{fontWeight: 'bold', color: 'black', fontSize: 20}}>
          Search Contact
        </Text>

        {/* Search Input Field */}
        <TextInput
          placeholder="Search"
          placeholderTextColor={'gray'}
          style={{borderWidth: 1, borderRadius: 5, marginVertical: 5}}
          value={search}
          onChangeText={v => setSearch(v)}
        />
        {/* Search Button */}
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            backgroundColor: '#212F3C',
            marginVertical: 5,
            borderRadius: 5,
            marginHorizontal: 25,
          }}
          onPress={() => searchContact()}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontWeight: 'bold',
              paddingVertical: 5,
              fontSize: 20,
            }}>
            Search
          </Text>
        </TouchableOpacity>
      </View>

      {/* Contacts Display */}
      {searchList.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              flex: 1,
              backgroundColor: '#717D7E',
              marginHorizontal: 10,
              marginVertical: 10,
              paddingVertical: 10,
              borderRadius: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{justifyContent: 'center'}}>
                <Text
                  style={{
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    borderRadius: 150,
                    backgroundColor: '#BFC9CA',
                    marginHorizontal: 10,
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>
                  {item.name.substring(0, 1)}
                </Text>
              </View>
              <View>
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
                  {item.name}
                </Text>
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
                  {item.number}
                </Text>
              </View>
            </View>

            {/* Delete Button */}
            <View
              style={{
                justifyContent: 'flex-end',
                marginHorizontal: 10,
              }}>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  //   backgroundColor: '#BFC9CA',
                  //   borderRadius: 20,
                  //   borderWidth: 1,
                  padding: 5,
                  alignSelf: 'flex-end',
                }}
                onPress={() => deleteContact(index)}>
                <Icon name={'delete-outline'} size={25} color={'white'} />
              </TouchableOpacity>
            </View>
          </View>
        );
      })}

      {/* Input Fields */}
      <View>
        <TextInput
          style={{margin: 5, borderWidth: 1, borderRadius: 5}}
          placeholder="Enter Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={{margin: 5, borderWidth: 1, borderRadius: 5}}
          placeholder="Enter Number"
          keyboardType="number-pad"
          value={number}
          onChangeText={setNumber}
        />
      </View>

      {/* Add Button */}
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          backgroundColor: '#212F3C',
          margin: 5,
          borderRadius: 5,
        }}
        onPress={() => newContacts(name, number)}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold',
            paddingVertical: 5,
            fontSize: 20,
          }}>
          Add Contact
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Task1;
