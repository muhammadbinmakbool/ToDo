import { StyleSheet, Text, View , TextInput, TouchableOpacity, Button, Image} from 'react-native'
import React from 'react'

const Task1 = () => {
  return (
    <View style={{flex:1, margin:40}}>
      <View style={{flex:0.75}}>
        <Text style={{fontWeight:'bold', fontSize:20}}>SIGN UP</Text>
      </View>

      {/* Credentials Input */}
      <View style={{flex:1, paddingVertical:10}}>
        <Text style={{fontWeight:'bold'}}>Email</Text>
        <TextInput style={{borderWidth:1, borderColor:'gray', borderRadius: 5, marginVertical:5}} placeholder='Email' />
      </View>
      <View style={{flex:1, paddingVertical:10}}>
        <Text style={{fontWeight:'bold'}}>Password</Text>
        <TextInput style={{borderWidth:1, borderColor:'gray', borderRadius: 5, marginVertical:5}} placeholder='Password' />
      </View>
      
      {/* Button */}
      <View style={{flex:1, justifyContent:'center', paddingVertical:10}}>
        <TouchableOpacity 
          style={{backgroundColor:'#CF55A7', borderRadius: 5, height:40, justifyContent:'center'}}
          onPress={()=>console.log('===SIGN UP===')}>
          <Text style={{textAlign:'center', fontWeight:'bold', color:'white'}}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      
      
      <View style={styles.container}>
        <View>
          <Text style={styles.box}>
            OR
          </Text>
        </View>
      </View>

      {/* Social Media LOGO */}
      <View style={styles.container}>
        <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
          {/* <Image 
              source={require('../assets/images/task1/google-plus.png')} 
              style={styles.image}/>
          <Image 
              source={require('../assets/images/task1/facebook.png')} 
              style={styles.image}/>
          <Image 
            source={require('../assets/images/task1/linkedin.png')} 
            style={styles.image}/> */}
        </View>
        <View style={{flex:1, alignItems:'center'}}>
          <Image 
            source={require('../assets/images/task1/google-plus.png')} 
            style={styles.image}/>
        </View>
        <View style={{flex:1, alignItems:'center'}}>
          <Image 
              source={require('../assets/images/task1/facebook.png')} 
              style={styles.image}/>
        </View>
        <View style={{flex:1, alignItems:'center'}}>
          <Image 
              source={require('../assets/images/task1/linkedin.png')} 
              style={styles.image}/>
        </View>
        <View style={{flex:1}} />
      </View>


      <View style={{flex:1}}>
        <Text style={{textAlign:'center', fontWeight:'700'}}>
          Already a User? 
          <Text style={{textDecorationLine:'underline'}}> LOGIN</Text>
        </Text>
      </View>
    </View>
  )
}

export default Task1;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    paddingHorizontal:10,
  },
  box:{
    borderRadius:5,
    borderWidth:1,
    borderColor:'gray',
    padding:5,
    textAlign:'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
    paddingVertical:10,
  },
})


{/* <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'grey'}}>

<View style={{backgroundColor: 'green', flex: 1, justifyContent: 'center'}}>
  <Text style={{color: 'red', fontSize: 30, fontWeight: '600',borderWidth:1, borderColor:'yellow', marginRight:10}}>
    Hello World
  </Text>
  <TextInput 
  style={{backgroundColor: 'white', borderRadius: 30, height: 40,}}
  placeholder="Enter Number"
  placeholderTextColor={'red'}
  keyboardType="email-address"
  />
</View>

<View style={{backgroundColor: 'grey', flex: 1}}>
  <Text style={{color: 'black'}}>
    Hello World
  </Text>
  <TouchableOpacity 
  style={{backgroundColor: '#F2796B', height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 10, margin:10}}
  onPress={()=> console.log('==== TouchableOpacity ==>')}
  >
    <Text style={{fontSize: 20, fontWeight: '600',color:'#ffffff'}}>
      Button
    </Text>
  </TouchableOpacity>
</View>

<View style={{backgroundColor: 'black', flex: 1}}>
  <Text style={{color: 'white', textAlign:'right'}}>
    Hello World
  </Text>
  <Button title="Button" onPress={()=> console.log('===== On Press ===>')}/>
</View>

</View> */}