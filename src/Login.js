import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginHandler = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log('---Sign In Successful---');
        setEmail('');
        setPassword('');
        if (user) {
          navigation.navigate('TodoList');
        }
      })
      .catch(e => {
        console.log(e, 'Sign In Failed');
        Alert.alert('Wrong Credentials', e.message);
      });
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{backgroundColor: '#e2ecec', flex: 1}}>
          {/* Welcome Note */}
          <ImageBackground
            source={require('./assets/images/Ellipse.png')}
            style={{
              position: 'absolute',
              width: 200,
              height: 140,
            }}></ImageBackground>
          <View style={{flex: 2, justifyContent: 'space-evenly'}}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 25,
                color: 'black',
              }}>
              Welcome Back!
            </Text>
            <Image
              source={require('./assets/images/youngman.png')}
              style={{alignSelf: 'center', marginVertical: 10}}
            />
          </View>

          {/* Credentials Input Field */}
          <View style={{flex: 1, justifyContent: 'center'}}>
            <TextInput
              placeholder="Enter Your Email Address"
              placeholderTextColor={'grey'}
              style={styles.textinputfield}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              placeholder="Enter Password"
              secureTextEntry={true}
              placeholderTextColor={'grey'}
              style={styles.textinputfield}
              value={password}
              onChangeText={setPassword}
            />
          </View>

          {/* Sign In Button */}
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text
              style={{
                color: '#55847AF7',
                fontWeight: 'bold',
                textAlign: 'center',
                marginVertical: 10,
              }}>
              Forgot Password?
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#55847A',
                justifyContent: 'center',
                width: 220,
                alignSelf: 'center',
                height: 45,
                marginVertical: 10,
              }}
              onPress={loginHandler}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: 'white',
                  textAlign: 'center',
                  alignSelf: 'center',
                }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>

          {/* Sign Up Button */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'baseline',
              justifyContent: 'center',
              marginVertical: 10,
              flex: 0.3,
            }}>
            <Text style={styles.signinbuttontext}>Don't Have an Account? </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Signup')}
              style={{alignContent: 'center'}}>
              <Text
                style={[
                  styles.signinbuttontext,
                  {textDecorationLine: 'underline'},
                ]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  signinbuttontext: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
  },
  textinputfield: {
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 15,
    fontWeight: 'bold',
    color: '#55847A',
  },
});
