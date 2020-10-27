import React,{Component, useState, useContext} from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Keyboard, Alert} from 'react-native'
import Animated, {Easing} from 'react-native-reanimated'
import {TapGestureHandler, State} from 'react-native-gesture-handler'

//import {Link, useHistory} from 'react-router-dom'

const {width, height} =Dimensions.get('window')
const {Value, event, block, cond, eq, set, Clock, startClock, stopClock, debug, timing, clockRunning, interpolate, Extrapolate,concat} = Animated

function runTiming(clock, value, dest) {

    const state = {
      finished: new Value(0),
      position: new Value(0),
      time: new Value(0),
      frameTime: new Value(0)
    };
  
    const config = {
      duration: 500,
      toValue: new Value(0),
      easing: Easing.inOut(Easing.ease)
    };
  
    return block([
      cond(clockRunning(clock), 0, [
        set(state.finished, 0),
        set(state.time, 0),
        set(state.position, value),
        set(state.frameTime, 0),
        set(config.toValue, dest),
        startClock(clock)
      ]),
      timing(clock, state, config),
      cond(state.finished, debug('stop clock', stopClock(clock))),
      state.position
    ]);
  }

export default class LoginScreen extends Component {
    
    constructor(){
        super();

        this.state={
            data: [],
            isLoading: true,
        }

        this.buttonOpacity = new Value(1);

        this.onStateChange = event([
            {
                nativeEvent:({state})=>block([
                    cond(eq(state, State.END), set(this.buttonOpacity, runTiming(new Clock(),1,0)))
                ])
            }
        ]);
        this.buttonY = interpolate(this.buttonOpacity, {
            inputRange:[0,1],
            outputRange:[100,0],
            extrapolate:Extrapolate.CLAMP
        });
        this.bgY = interpolate(this.buttonOpacity, {
            inputRange:[0,1],
            outputRange:[-height/3.5,0],
            extrapolate:Extrapolate.CLAMP
        });
        this.textInputZindex = interpolate(this.buttonOpacity, {
            inputRange:[0,1],
            outputRange:[1,-1],
            extrapolate:Extrapolate.CLAMP
        });
        this.textInputY = interpolate(this.buttonOpacity, {
            inputRange:[0,1],
            outputRange:[0,100],
            extrapolate: Extrapolate.CLAMP
        });
        this.textInputOpacity = interpolate(this.buttonOpacity, {
            inputRange:[0,1],
            outputRange:[1,0],
            extrapolate: Extrapolate.CLAMP
        });
        this.rotateCross = interpolate(this.buttonOpacity, {
            inputRange:[0,1],
            outputRange:[180,360],
            extrapolate: Extrapolate.CLAMP
        });
        this.onCloseState = event([
            {
                nativeEvent:({state})=>block([
                    cond(eq(state, State.END), set(this.buttonOpacity, runTiming(new Clock(),0,1)))
                ])
            }
        ]);
    }
    
    // componentDidMount() {
    //     this.keyboardDidShowListener = Keyboard.addListener(
    //       'keyboardDidShow',
    //       this._keyboardDidShow,
    //     );
    //     this.keyboardDidHideListener = Keyboard.addListener(
    //       'keyboardDidHide',
    //       this._keyboardDidHide,
    //     );
    //   }
    
    //   componentWillUnmount() {
    //     this.keyboardDidShowListener.remove();
    //     this.keyboardDidHideListener.remove();
    //   }
    
    //   _keyboardDidShow() {
    //     alert('Keyboard Shown');
    //   }
    
    //   _keyboardDidHide() {
    //     alert('Keyboard Hidden');
    // }
    
    // componentDidMount(){
    //     fetch('https://domedia-api.herokuapp.com/login', {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             email,
    //             password,
    //        })
    //      }).then(res => res.json())
    //      .then( data => {
    //          console.log(data)
    //          if(data.error){
    //              Alert.alert(string, "Not Success")
    //             //  M.toast({html: data.error, classes:"red"})
    //          }
    //          else{
    //              localStorage.setItem("jwt", data.token)
    //              localStorage.setItem("user",JSON.stringify(data.user))
    //              dispatch({type:"USER", payload:data.user})
    //              Alert.alert(string, "Success")
    //             //  M.toast({html: "Login success", classes:"green"})
    //             //  history.push('/')
    //          }
    //      }).catch(err => {
    //          console.log(err)
    //      })
    // }

    render(){

        return(
            <View style={{flex:1, backgroundColor:'white', justifyContent:'flex-end'}}>
                <Animated.View style={{...StyleSheet.absoluteFill,transform:[{translateY:this.bgY}]}}>
                    <Image 
                        source={require('../assets/bg.jpg')}
                        style={{flex:1, height:null, width:null}}
                    />
                </Animated.View>
                <View style={{height:height/3.5}}>
                    <TapGestureHandler onHandlerStateChange={this.onStateChange}>
                        <Animated.View style={{...styles.button, opacity:this.buttonOpacity, transform:[{translateY:this.buttonY}]}}>
                            <Text style={{fontWeight:'bold', fontSize: 15}}>SIGN IN</Text>
                        </Animated.View>
                    </TapGestureHandler>
                    <Animated.View style={{...styles.button, opacity:this.buttonOpacity, transform:[{translateY:this.buttonY}]}}>
                        <Text
                            onPress={() =>
                                this.props.navigation.navigate('SignUp')}
                            style={{fontWeight:'bold', fontSize: 15}}>SIGN UP</Text>
                    </Animated.View>
                    <Animated.View style={{...styles.ForgotPassword, opacity:this.buttonOpacity, transform:[{translateY:this.buttonY}]}}>
                        <Text style={{fontSize: 15, color:'white'}}>Forgot password?</Text>
                    </Animated.View>
                    <Animated.View style={{zIndex:this.textInputZindex, 
                                           opacity:this.textInputOpacity, 
                                           transform:[{translateY:this.textInputY}],
                                           height:height/3.5, 
                                           ...StyleSheet.absoluteFill, 
                                           top: null, 
                                           justifyContent:'center'}}>
                        <TapGestureHandler onHandlerStateChange={this.onCloseState}>
                            <Animated.View style={styles.CloseButtom}>
                                <Animated.Text style={{fontSize:15, transform:[{rotate:concat(this.rotateCross,'deg')}]}}>
                                    X
                                </Animated.Text>
                            </Animated.View>
                        </TapGestureHandler>
                        <TextInput 
                        placeholder="EMAIL"
                        // onSubmitEditing={Keyboard.dismiss}
                        // onChange={(event) => setEmail(event.target.value)}
                        // value={this.state.email}
                        style={styles.TextInput}
                        placeholderTextColor="black"
                        />
                        <TextInput 
                        placeholder="PASSWORD"
                        secureTextEntry={true}
                        // onSubmitEditing={Keyboard.dismiss}
                        // onChange={(event) => setPassword(event.target.value)}
                        // value={this.state.password}
                        style={styles.TextInput}
                        placeholderTextColor="black"
                        />
                        <Animated.View style={styles.button}>
                            <Text 
                            onPress={() =>
                                this.props.navigation.navigate('HomeScreen')}
                            // onClick={() => PostLogin()} 
                            // onPress={() =>
                            //     PostLogin()}
                            style={{fontSize: 15, fontWeight:'bold'}}> 
                            SIGN IN
                            </Text>
                        </Animated.View>
                    </Animated.View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
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
    },
    TextInput:{
        height:50,
        borderRadius:30,
        borderWidth:1,
        marginHorizontal:45,
        paddingLeft:20,
        marginVertical:5,
        borderColor: '#D9D9D6',
    },
    CloseButtom:{
        height:40,
        width: 40,
        backgroundColor:'white',
        borderRadius: 20,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        top: -25,
        left: width/2-20,
        shadowOffset:{width: 2, height:2},
        shadowColor:'black',
        shadowOpacity: 0.2
    },
    ForgotPassword:{
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        bottom: 65,
        left: width/2-60,
    },
});