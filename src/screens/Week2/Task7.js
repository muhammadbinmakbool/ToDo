import {
  TextInput,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';

const Task7 = () => {
  const [contacts, setContacts] = useState([
    {name: 'Muhammad', number: '03329010686'},
    {name: 'Ahmad', number: '03015922775'},
  ]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // Add New Contact
  const newContacts = (name, number) => {
    const newcontact = {name, number};
    const updatecontacts = [...contacts, newcontact];
    setContacts(updatecontacts);
    setName('');
    setNumber('');
  };

  return (
    <View style={{margin: 10}}>
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
          Contact List
        </Text>
      </View>

      {/* Display Contact List */}
      <FlatList
        data={contacts}
        horizontal={false}
        renderItem={({item}) => {
          return (
            <View
              // key={index}
              style={{
                backgroundColor: '#717D7E',
                marginHorizontal: 10,
                marginVertical: 10,
                paddingVertical: 10,
                borderRadius: 5,
                flexDirection: 'row',
              }}>
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
          );
        }}
      />

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
    </View>
  );
};

export default Task7;
