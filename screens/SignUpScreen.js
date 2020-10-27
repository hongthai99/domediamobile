import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Text,
} from 'react-native'

export default class SignUp extends React.Component {
  // state = {
  //   username: '', password: '', email: '', phone_number: ''
  // }
  // onChangeText = (key, val) => {
  //   this.setState({ [key]: val })
  // }
  // signUp = async () => {
  //   const { username, password, email, phone_number } = this.state
  //   try {
  //     // here place your signup logic
  //     console.log('user successfully signed up!: ', success)
  //   } catch (err) {
  //     console.log('error signing up: ', err)
  //   }
  // }
 
  render() {
    return (
      <View style={{...styles.container}}>
        <TextInput
          style={styles.TextInput}
          placeholder='USERNAME'
          autoCapitalize="none"
          placeholderTextColor='black'
          
        //   placeholderTextColor='white'
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.TextInput}
          placeholder='EMAIL'
          secureTextEntry={true}
          autoCapitalize="none"
        //   placeholderTextColor='white'
          placeholderTextColor='black'
          onChangeText={val => this.onChangeText('password', val)}
        />
        <TextInput
          style={styles.TextInput}
          placeholder='PASSWORD'
          autoCapitalize="none"
        //   placeholderTextColor='white'
          placeholderTextColor='black'
          onChangeText={val => this.onChangeText('email', val)}
        />
        <View style={styles.button}>
            <Text style={{fontSize: 15, fontWeight:'bold'}}> 
                    SIGN UP
                </Text>
        </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
    TextInput:{
        height:50,
        borderRadius:30,
        borderWidth:1,
        marginHorizontal:45,
        paddingLeft:20,
        marginVertical:5,
        borderColor: '#D9D9D6',
        backgroundColor:'white'
    },
    button:{
        backgroundColor:'white',
        height:60,
        marginHorizontal: 45,
        borderRadius: 30,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:5,
        shadowOffset:{width: 2, height:2},
        shadowColor:'black',
        shadowOpacity: 0.2
  }
});