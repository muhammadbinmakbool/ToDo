import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

const Task5 = () => {
  return (
    <View style={{flex: 1, margin: 10}}>
      {/* Status Icons */}
      <View
        style={{
          flex: 0.5,
          flexDirection: 'row',
          alignContent: 'space-between',
        }}>
        <View style={{flex: 1}}>
          <Image source={require('../assets/images/task5/Time.png')} />
        </View>
        <View>
          <Image source={require('../assets/images/task5/Status-Icons.png')} />
        </View>
      </View>

      {/* Welcome Note */}
      <View style={{flex: 0.5, marginVertical: 5}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
            Login{' '}
          </Text>
          <Image source={require('../assets/images/task5/User.png')} />
        </View>
        <View>
          <Text style={{color: 'black'}}>Welcome Back, Muhammad Ahmad</Text>
        </View>
      </View>

      {/* Shopping Image */}
      <View style={{flex: 3, alignItems: 'center', marginVertical: 5}}>
        <Image source={require('../assets/images/task5/Shopping.png')} />
      </View>

      {/* Simple  Text "Mobile Number Input" */}
      <View style={{flex: 1, justifyContent: 'center', marginVertical: 5}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: '#F2796B',
            textAlign: 'center',
            marginVertical: 10,
          }}>
          Enter Your Mobile Number
        </Text>
      </View>

      {/* Simple Text "Change Number" */}
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View
          style={{borderRadius: 10, borderWidth: 1, borderColor: '#F2796B'}}>
          <TextInput placeholder="Enter Number" keyboardType="number-pad" />
        </View>
        <Text style={{textAlign: 'right', paddingVertical: 5, color: 'black'}}>
          Change Number?
        </Text>
      </View>

      {/* Login Button */}
      <View style={{flex: 1, justifyContent: 'center', marginTop: 10}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#F2796B',
            justifyContent: 'center',
            borderRadius: 10,
          }}
          onPress={() => console.log('====Login====')}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              height: 45,
              fontSize: 15,
              color: 'white',
              paddingTop: 10,
            }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>

      {/* Simple Text "Or With" */}
      <View style={{flex: 0.5, justifyContent: 'center'}}>
        <Text style={{textAlign: 'center', color: 'black'}}>Or With</Text>
      </View>

      {/* Google Link */}
      <View style={{flex: 0.5, justifyContent: 'center'}}>
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => console.log('===Login With Google===')}>
          <View style={{flexDirection: 'row'}}>
            <Image source={require('../assets/images/task5/Google.png')} />
            <Text> Google</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* New Account Link */}
      <View style={{flex: 0.5, justifyContent: 'center'}}>
        <Text style={{textAlign: 'center'}}>
          You Don't Have an Account?{''}
          <Text style={{fontWeight: 'bold'}}>Sign Up</Text>
        </Text>
      </View>
    </View>
  );
};

export default Task5;
