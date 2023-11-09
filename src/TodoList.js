import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React, {useEffect, useState, useCallback} from 'react';
import firestore from '@react-native-firebase/firestore';
import DIcon from 'react-native-vector-icons/AntDesign';
import SOIcon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';

const TodoList = ({route, navigation}) => {
  const newTask = route.params;
  // console.log('Rerendered New Task', newTask);
  const [localTodoList, setLocalTodoList] = useState([]);
  const [firstRender, setFirstRender] = useState(true);
  const user = auth().currentUser;
  const userId = user.uid;
  const ref = firestore().collection('Tasks');
  // console.log(user, '~~~~User Data~~~~');
  const fullName = user.displayName;
  const [firstName, lastName] = fullName.split(' ');

  // Set Data to Firebase
  const setDatatoFirebase = useCallback(async () => {
    try {
      await ref.add({
        task: newTask,
        status: false,
        UserId: user.uid,
      });
      console.log('Uploaded--------');
    } catch (e) {
      console.log(e, 'ERROR======');
    }
    await getDatafromFirebase();
  }, [newTask]);

  // Get Data from Firebase
  const getDatafromFirebase = async () => {
    try {
      const querySnapshot = await ref.where('UserId', '==', userId).get();
      const taskList = querySnapshot.docs.map(doc => ({
        docId: doc.id,
        ...doc.data(),
      }));
      setLocalTodoList(taskList);
      console.log(taskList, '==========');
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  // Delete Data from FireBase
  const deleteTask = async id => {
    await ref.doc(id).delete();
    const updateLocalTodoList = localTodoList.filter(task => task.docId !== id);
    setLocalTodoList(updateLocalTodoList);
  };

  // CheckBox Value Handler
  const toggleHandler = item => {
    const updateTodoList = [...localTodoList];
    const index = localTodoList.findIndex(task => task.task === item.task);
    updateTodoList[index].status = !localTodoList[index].status;
    setLocalTodoList(updateTodoList);

    console.log(localTodoList[index].status, 'Status Changed');
    updateDataInFirebase(item);
  };

  // Update Data in the Firebase
  const updateDataInFirebase = async item => {
    const updatedStatus = item.status;
    try {
      await ref.doc(item.docId).update({
        task: item.task,
        status: updatedStatus,
        UserId: item.UserId,
      });
      console.log('Status Updated in Firebase');
    } catch (error) {
      console.error('Error updating data in Firebase:', error);
    }
    console.log('DOC ID========>', item.docId);
  };

  // Sign out Button
  const signOutHandler = async () => {
    console.log('Pressed');
    await auth().signOut().then(navigation.navigate('Login'));
  };

  useEffect(() => {
    if (!firstRender) {
      setDatatoFirebase();
    } else {
      getDatafromFirebase();
      setFirstRender(false);
    }
  }, [newTask]);

  return (
    <View style={{backgroundColor: '#e2ecec', flex: 1}}>
      <ImageBackground
        source={require('./assets/images/Ellipse.png')}
        style={styles.imageBackground}></ImageBackground>
      <TouchableOpacity onPress={signOutHandler}>
        <SOIcon
          name="sign-out"
          size={25}
          style={{position: 'absolute', top: 10, right: 10}}
          color="#444444"
        />
      </TouchableOpacity>
      {/* Welcome Note */}
      <View style={{justifyContent: 'center', flex: 2}}>
        <View>
          <Text style={styles.welcomeText}>Welcome {firstName}!</Text>
          <Image
            source={require('./assets/images/woman.png')}
            style={{
              alignSelf: 'center',
              marginVertical: 10,
              width: 120,
              height: 150,
            }}
          />
        </View>
        <View style={styles.todoTaskTitleView}>
          <Text style={styles.todoTaskTitle}>Todo Tasks.</Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('AddTask')}
              style={styles.addTaskButton}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Add Task
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={
          localTodoList.length > 0 ? styles.taskCard : styles.addTaskMessageView
        }>
        {localTodoList.length > 0 ? (
          <FlatList
            data={localTodoList}
            renderItem={({item}) => {
              return (
                <ScrollView style={{paddingVertical: 10}}>
                  <View
                    style={{
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <CheckBox
                        value={item.status}
                        onValueChange={() => toggleHandler(item)}
                        disabled={false}
                        tintColors={{true: '#55847A', false: 'grey'}}
                      />
                      <Text
                        style={{
                          fontWeight: '500',
                          color: '#55847A',
                          fontSize: 18,
                        }}>
                        {' '}
                        {item.task}
                      </Text>
                    </View>
                    <TouchableOpacity onPress={() => deleteTask(item.docId)}>
                      <DIcon name="delete" size={20} color="#444444" />
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              );
            }}
          />
        ) : (
          <Text style={styles.addTaskMessage}>Add your Daily Tasks</Text>
        )}
      </View>
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  imageBackground: {
    position: 'absolute',
    width: 200,
    height: 140,
  },
  profile: {
    alignSelf: 'center',
    marginVertical: 15,
    width: 60,
    height: 60,
    backgroundColor: 'grey',
    borderRadius: 150,
    alignSelf: 'center',
  },
  welcomeText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    marginVertical: 15,
  },
  todoTaskTitleView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 15,
  },
  todoTaskTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  addTaskButton: {
    backgroundColor: '#55847A',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 25,
    borderRadius: 5,
  },
  taskCard: {
    flex: 2.5,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 10,
    marginHorizontal: 10,
    height: 200,
    marginBottom: 20,
  },
  addTaskMessageView: {
    flex: 2.5,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 10,
    marginHorizontal: 10,
    height: 200,
    marginBottom: 20,
    justifyContent: 'center',
  },
  addTaskMessage: {
    textAlign: 'center',
    color: '#444',
    fontWeight: '500',
    fontSize: 15,
  },
});
