import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const ContactCard = ({contact, deleteContact, index}) => {
  return (
    <View>
      {/* Contacts Display */}
      <View style={style.cardBackground}>
        <View style={{flexDirection: 'row'}}>
          <View style={{justifyContent: 'center'}}>
            <Text style={style.nameTag}>{contact.name.substring(0, 1)}</Text>
          </View>
          <View>
            <Text style={style.cardText}>{contact.name}</Text>
            <Text style={style.cardText}>{contact.number}</Text>
          </View>
        </View>

        {/* Delete Button */}
        <View style={style.deleteButtonPlace}>
          <TouchableOpacity
            style={style.deleteButtonStyle}
            onPress={() => deleteContact(index)}>
            <Icon name={'delete-outline'} size={25} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ContactCard;

const style = StyleSheet.create({
  cardBackground: {
    flex: 1,
    backgroundColor: '#717D7E',
    marginHorizontal: 10,
    marginVertical: 10,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameTag: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 150,
    backgroundColor: '#BFC9CA',
    marginHorizontal: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardText: {color: 'white', fontWeight: 'bold', fontSize: 15},
  deleteButtonPlace: {
    justifyContent: 'flex-end',
    marginHorizontal: 10,
  },
  deleteButtonStyle: {
    justifyContent: 'center',
    padding: 5,
    alignSelf: 'flex-end',
  },
});
