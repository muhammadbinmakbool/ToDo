import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Signup = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const ref = firestore().collection('Users');

  // Create Account
  const createAccount = async () => {
    try {
      if (
        firstName === '' ||
        lastName === '' ||
        email === '' ||
        password === '' ||
        confirmPassword === ''
      ) {
        Alert.alert('All Fields must be Filled');
      } else if (password !== confirmPassword) {
        Alert.alert('Your Password and Confirm Password Does Not Match');
      } else if (password.length < 6) {
        Alert.alert('Password must have at Least 6 Characters');
      } else {
        const userCredentials = await auth()
          .createUserWithEmailAndPassword(email, password)
          .then(async user => {
            if (user) {
              await auth().currentUser.updateProfile({
                displayName: `${firstName} ${lastName}`,
              });
              setFirstName('');
              setLastName('');
              setEmail('');
              setPassword('');
              setConfirmPassword('');
              navigation.navigate('TodoList');
            }
          });
      }
    } catch (e) {
      console.log(e);
      Alert.alert('Error', e.message);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{backgroundColor: '#e2ecec', flex: 1}}>
          <ImageBackground
            source={require('./assets/images/Ellipse.png')}
            style={{
              position: 'absolute',
              width: 200,
              height: 140,
            }}></ImageBackground>
          {/* Welcome Note */}
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 25,
                color: 'black',
              }}>
              Welcome Onboard!
            </Text>
            {/* Welcome Subnote */}
            <View>
              <Text
                style={{
                  marginVertical: 20,
                  color: '#55847AF7',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Let’s help you meet up your task
              </Text>
            </View>
          </View>
          {/* Credentials Input Field */}
          <View style={{flex: 2}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <TextInput
                  placeholder="First Name"
                  placeholderTextColor={'grey'}
                  style={[
                    styles.textinputfield,
                    {marginLeft: 10, marginRight: 5},
                  ]}
                  value={firstName}
                  onChangeText={setFirstName}
                />
              </View>
              <View style={{flex: 1}}>
                <TextInput
                  placeholder="Last Name"
                  placeholderTextColor={'grey'}
                  style={[
                    styles.textinputfield,
                    {marginRight: 10, marginLeft: 5},
                  ]}
                  value={lastName}
                  onChangeText={setLastName}
                />
              </View>
            </View>
            <TextInput
              placeholder="Enter Your Email Address"
              placeholderTextColor={'grey'}
              style={styles.textinputfield}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              placeholder="Create a Password"
              secureTextEntry={true}
              placeholderTextColor={'grey'}
              style={styles.textinputfield}
              value={password}
              onChangeText={setPassword}
            />
            <TextInput
              placeholder="Confirm Your Password"
              placeholderTextColor={'grey'}
              secureTextEntry={true}
              style={styles.textinputfield}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>

          {/* Sign Up Button */}
          <View
            style={{
              position: 'relative',
              flex: 1,
              justifyContent: 'flex-start',
            }}>
            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: '#55847A',
                  justifyContent: 'center',
                  width: 220,
                  alignSelf: 'center',
                  height: 45,
                }}
                onPress={createAccount}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: 'white',
                    textAlign: 'center',
                    alignSelf: 'center',
                  }}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>

            {/* Sign In Text */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'baseline',
                justifyContent: 'center',
                marginVertical: 10,
              }}>
              <Text style={styles.signinbuttontext}>
                Already have an Account?{' '}
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={{alignContent: 'center'}}>
                <Text
                  style={[
                    styles.signinbuttontext,
                    {textDecorationLine: 'underline'},
                  ]}>
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default Signup;

const styles = StyleSheet.create({
  signinbuttontext: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    bottom: 1,
    color: '#444444',
  },
  textinputfield: {
    borderWidth: 2,
    borderRadius: 10,
    marginVertical: 15,
    marginHorizontal: 10,
    fontWeight: 'bold',
    borderColor: '#444444',
    color: '#55847A',
  },
});
