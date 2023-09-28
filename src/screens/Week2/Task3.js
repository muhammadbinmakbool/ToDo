import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

const Task3 = () => {
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
      <View style={{flex: 1, justifyContent: 'center', color: 'black'}}>
        <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>
          Hi, Welcome Back! 👋
        </Text>
      </View>

      {/* Credentials Input */}
      <View style={{flex: 4, justifyContent: 'center'}}>
        <Text style={{paddingVertical: 5, fontWeight: 'bold', color: 'black'}}>
          Email
        </Text>
        <TextInput
          style={{borderWidth: 1, borderRadius: 10, marginBottom: 5}}
          placeholder="example@gmail.com"
          keyboardType="email-address"
        />
        <Text style={{paddingVertical: 5, fontWeight: 'bold', color: 'black'}}>
          Password
        </Text>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderRadius: 10,
            marginBottom: 5,
            justifyContent: 'space-between',
          }}>
          <TextInput placeholder="Enter Your Password" />
          <View
            style={{
              alignItems: 'flex-end',
              justifyContent: 'center',
              paddingRight: 5,
            }}>
            <Image source={require('../assets/images/task3/Eye-Icon.png')} />
          </View>
        </View>
      </View>

      {/* Forget Password Link */}
      <View style={{flex: 0.5, justifyContent: 'flex-start', marginBottom: 5}}>
        <Text style={{color: 'red', textAlign: 'right'}}>Forgot Password?</Text>
      </View>

      {/* Login Button */}
      <View style={{flex: 1, justifyContent: 'center', marginVertical: 5}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#0E64D2',
            borderWidth: 1,
            height: 50,
            justifyContent: 'center',
            borderRadius: 5,
          }}
          onPress={() => console.log('===Login===')}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 15,
            }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>

      {/* Simple Text "Or With"*/}
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{textAlign: 'center'}}>-------Or With-------</Text>
      </View>

      {/* Login Options */}
      <View style={{flex: 3, justifyContent: 'center'}}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            backgroundColor: '#1877F2',
            height: 50,
            borderRadius: 5,
            marginVertical: 5,
            // flexDirection: 'row',
            alignContent: 'space-between',
          }}
          onPress={() => console.log('==Login with Facebook==')}>
          {/* <Image source={require('../assets/images/task3/Facebook.png')} /> */}
          <Text
            style={{textAlign: 'center', fontWeight: 'bold', color: 'white'}}>
            Login with Facebook
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
          onPress={() => console.log('==Login with Google==')}>
          {/* <Image
            source={require('../assets/images/task3/Google.png')}
            style={{alignSelf: 'flex-start'}}
          /> */}
          <Text
            style={{textAlign: 'center', fontWeight: 'bold', color: 'black'}}>
            Login with Google
          </Text>
        </TouchableOpacity>
      </View>

      {/* Simple Text "Don't Have an Account" */}
      <View style={{flex: 0.5, justifyContent: 'center'}}>
        <Text style={{textAlign: 'center', fontWeight: 'bold', color: 'black'}}>
          Don't Have an Account? <Text style={{color: '#160062'}}>Sign Up</Text>
        </Text>
      </View>
    </View>
  );
};

export default Task3;
