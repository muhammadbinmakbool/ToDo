import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';

const AddTask = ({navigation}) => {
  const [todo, settodo] = useState();
  const addtask = task => {
    settodo('');
    navigation.navigate('TodoList', newTask);
  };

  return (
    <View style={{backgroundColor: '#e2ecec', flex: 1}}>
      <ImageBackground
        source={require('./assets/images/Ellipse.png')}
        style={{
          position: 'absolute',
          width: 200,
          height: 140,
        }}></ImageBackground>
      {/* Welcome Note */}
      <View style={{justifyContent: 'center', marginVertical: 10}}>
        <View style={{justifyContent: 'center'}}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 25,
              color: 'black',
              marginVertical: 20,
            }}>
            Welcome OnBoard!
          </Text>
        </View>

        <View>
          <Image
            source={require('./assets/images/girlboy.png')}
            style={{alignSelf: 'center', marginVertical: 10}}
          />
        </View>
        <View>
          <Text
            style={{
              marginVertical: 10,
              color: '#55847AF7',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Add What Your Want to do Later
          </Text>
        </View>
      </View>

      {/* Add Task */}
      <View>
        <TextInput
          placeholder="Add Task"
          placeholderTextColor={'grey'}
          style={styles.textinputfield}
          value={todo}
          onChangeText={settodo}
        />
      </View>
      <TouchableOpacity
        onPress={() => addtask(todo)}
        style={{
          backgroundColor: '#55847A',
          justifyContent: 'center',
          width: 220,
          alignSelf: 'center',
          height: 45,
          marginVertical: 10,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: 'white',
            textAlign: 'center',
            alignSelf: 'center',
          }}>
          Add to List
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  addtolistbutton: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  textinputfield: {
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
    fontWeight: 'bold',
    color: '#55847A',
  },
});
