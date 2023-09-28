import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
import React from 'react';

const Task2 = () => {
  return (
    <View style={{flex: 1, margin: 40}}>
      <View style={{flex: 0.75}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>LOGIN</Text>
      </View>

      {/* Credentials Input */}
      <View style={{flex: 1, paddingVertical: 10}}>
        <Text style={{fontWeight: 'bold'}}>Email</Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 5,
            marginVertical: 5,
          }}
          placeholder="Email"
        />
      </View>
      <View style={{flex: 1, paddingVertical: 10}}>
        <Text style={{fontWeight: 'bold'}}>Password</Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 5,
            marginVertical: 5,
          }}
          placeholder="Password"
        />
      </View>

      {/* Button */}
      <View style={{flex: 1, justifyContent: 'center', paddingVertical: 10}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#CF55A7',
            borderRadius: 5,
            height: 40,
            justifyContent: 'center',
          }}
          onPress={() => console.log('===LOGIN===')}>
          <Text
            style={{textAlign: 'center', fontWeight: 'bold', color: 'white'}}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <View>
          <Text style={{textAlign: 'right', paddingVertical: 5}}>
            Forgot Password?
          </Text>
        </View>
      </View>

      <View style={styles.container}>
        <View>
          <Text style={styles.box}>OR</Text>
        </View>
      </View>

      {/* Social Media LOGO */}
      <View style={styles.container}>
        <View style={{flex: 1}} />
        <View style={{flex: 1, alignItems: 'center'}}>
          <Image
            source={require('../assets/images/task1/google-plus.png')}
            style={styles.image}
          />
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Image
            source={require('../assets/images/task1/facebook.png')}
            style={styles.image}
          />
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Image
            source={require('../assets/images/task1/linkedin.png')}
            style={styles.image}
          />
        </View>
        <View style={{flex: 1}} />
      </View>

      <View style={{flex: 1}}>
        <Text style={{textAlign: 'center', fontWeight: '700'}}>
          Need an Account?
          <Text style={{textDecorationLine: 'underline'}}> SIGN UP</Text>
        </Text>
      </View>
    </View>
  );
};

export default Task2;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    paddingHorizontal: 10,
  },
  box: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
  },
});
