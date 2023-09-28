import {View, Text} from 'react-native';
import React from 'react';

const DeleteContact = ({contacts, setContacts}) => {
  //   Delete Contact
  const deleteContact = useCallback(
    index => {
      const updatedContacts = [...contacts];
      updatedContacts.splice(index, 1);
      setContacts(updatedContacts);
    },
    [contacts, setContacts],
  );
};

export default DeleteContact;
