import {View, Text, Modal, Button} from 'react-native';
import React, {useState} from 'react';

const Day4 = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Button title="Open Modal" onPress={() => setModalVisible(true)} />
      <Modal visible={modalVisible} style={{justifyContent: 'center'}}>
        <Text style={{textAlign: 'center', fontSize: 40, fontWeight: 'bold'}}>
          I am a Modal
        </Text>
        <Button title="Close Modal" onPress={() => setModalVisible(false)} />
      </Modal>
    </View>
  );
};

export default Day4;
