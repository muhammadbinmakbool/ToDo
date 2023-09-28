import {StyleSheet} from 'react-native';
import React from 'react';
import Signup from './src/Signup';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/Login';
import TodoList from './src/TodoList';
import AddTask from './src/AddTask';
const stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="Login"
        screenOptions={() => ({
          headerShown: false,
        })}>
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Signup" component={Signup} />
        <stack.Screen name="TodoList" component={TodoList} />
        <stack.Screen name="AddTask" component={AddTask} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
