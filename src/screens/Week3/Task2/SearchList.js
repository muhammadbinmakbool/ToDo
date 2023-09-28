import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useCallback} from 'react';
import {useState} from 'react';

const SearchList = ({contacts, filteredList}) => {
  const [search, setSearch] = useState('');

  // Functional Part
  const updateSearchList = useCallback(() => {
    const filteredContacts = contacts.filter(item => {
      return item.name.toLocaleUpperCase() === search.toLocaleUpperCase();
    });
    filteredList([...filteredContacts]);
    setSearch('');
  }, [contacts, search, filteredList]);

  return (
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
      <TouchableOpacity style={style.button} onPress={() => updateSearchList()}>
        <Text style={style.text}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SearchList;

const style = StyleSheet.create({
  button: {
    justifyContent: 'center',
    backgroundColor: '#212F3C',
    marginVertical: 5,
    borderRadius: 5,
    marginHorizontal: 25,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    paddingVertical: 5,
    fontSize: 20,
  },
});
