import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

const Task4 = () => {
  return (
    <View style={{flex: 1, margin: 5}}>
      {/* Top Icons */}
      <View
        style={{
          flex: 0.5,
          flexDirection: 'row',
          alignContent: 'space-between',
        }}>
        <View style={{flex: 1}}>
          <Image source={require('../assets/images/task3/Left.png')} />
        </View>
        <View>
          <Image source={require('../assets/images/task3/Right.png')} />
        </View>
      </View>

      {/* Welcome Note */}
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'center',
            color: 'black',
          }}>
          Create an Account
        </Text>
        <Text style={{textAlign: 'center', color: 'black'}}>
          Connect with your friends today!
        </Text>
      </View>

      {/* User Information Input */}
      <View style={{flex: 4, justifyContent: 'center'}}>
        <TextInput
          style={{borderWidth: 1, borderRadius: 10, marginVertical: 5}}
          placeholder="Enter Your Username"
        />
        <TextInput
          style={{borderWidth: 1, borderRadius: 10, marginVertical: 5}}
          placeholder="Enter Your Email"
          keyboardType="email-address"
        />
        <TextInput
          style={{borderWidth: 1, borderRadius: 10, marginVertical: 5}}
          placeholder="Enter Your Phone Number"
          keyboardType="number-pad"
        />
        <TextInput
          style={{borderWidth: 1, borderRadius: 10, marginVertical: 5}}
          placeholder="Enter Your Password"
        />
      </View>

      {/* Sign Up Button */}
      <View style={{flex: 1, justifyContent: 'center', marginBottom: 5}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#0E64D2',
            borderWidth: 1,
            height: 50,
            justifyContent: 'center',
            borderRadius: 5,
          }}
          onPress={() => console.log('===Sign Up===')}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 15,
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>

      {/* Simple Text "Or With"*/}
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{textAlign: 'center', color: 'black', fontWeight: 'bold'}}>
          Or With
        </Text>
      </View>

      {/* Sign Up Options */}
      <View style={{flex: 3, justifyContent: 'center'}}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            backgroundColor: '#1877F2',
            height: 50,
            borderRadius: 5,
            marginBottom: 5,
            // flexDirection: 'row',
            alignContent: 'space-between',
          }}
          onPress={() => console.log('==Sign Up with Facebook==')}>
          {/* <Image source={require('../assets/images/task3/Facebook.png')} /> */}
          <Text
            style={{textAlign: 'center', fontWeight: 'bold', color: 'white'}}>
            Sign Up with Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            borderRadius: 5,
            justifyContent: 'center',
            borderWidth: 1,
            marginVertical: 5,
            // flexDirection: 'row',
          }}
          onPress={() => console.log('==Sign Up with Google==')}>
          {/* <Image
            source={require('../assets/images/task3/Google.png')}
            style={{alignSelf: 'flex-start'}}
          /> */}
          <Text
            style={{textAlign: 'center', fontWeight: 'bold', color: 'black'}}>
            Sign Up with Google
          </Text>
        </TouchableOpacity>
      </View>

      {/* Simple Text "Don't Have an Account" */}
      <View style={{flex: 0.5, justifyContent: 'center'}}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'black',
            textDecorationLine: 'underline',
          }}>
          Already Have an Account? <Text style={{color: '#2F89FC'}}>Login</Text>
        </Text>
      </View>
    </View>
  );
};

export default Task4;
