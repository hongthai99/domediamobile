import React from 'react'
import Constants from 'expo-constants';
import {
  SafeAreaView, 
  ScrollView,
  View,
  Image,
  StyleSheet,
  Text,
} from 'react-native'

export default class HomeScreen extends React.Component {
    render(){
        return(
            <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.card}>
                    <View style={styles.userInfo}>
                        <Image
                        source={require('../assets/j.jpg')}
                        style={styles.userImg}/>
                        <View style={styles.userInfoText}>
                            <Text style={styles.userName}> Beeeeeeei</Text>
                        </View>
                    </View>
                    <View style={styles.postText}>
                        <Text> Hí anh em </Text> 
                    </View>
                    <View>
                        <Image
                        style={styles.postImg}
                        source={require('../assets/m.jpg')}/>
                    </View>
                    <View style={styles.Interaction}>
                        <View style={styles.like}>
                            <Text>Like</Text>
                        </View>
                        <View style={styles.like}>
                            <Text>Comment</Text>
                        </View>
                    </View>
                    <View style={styles.commentZone}>
                        <View >
                            <Text style={styles.commentPeople}>Be33</Text>
                        </View>
                        <View >
                            <Text style={{...styles.commentPeople, marginLeft:2}}>:</Text>
                        </View>
                        <View>
                            <Text style={{...styles.commentPeople, fontWeight:null,marginLeft:2}}>Dep zo</Text>
                        </View>
                    </View>
                    <View style={styles.commentZone}>
                        <View >
                            <Text style={styles.commentPeople}>Beeeeeee</Text>
                        </View>
                        <View >
                            <Text style={{...styles.commentPeople, marginLeft:2}}>:</Text>
                        </View>
                        <View>
                            <Text style={{...styles.commentPeople, fontWeight:null,marginLeft:2}}>iuuuuuuuuuuuuuuuuuuuuuuuuuu</Text>
                        </View>
                    </View>
                </View>
                
                <View style={styles.card}>
                    <View style={styles.userInfo}>
                        <Image
                        source={require('../assets/j.jpg')}
                        style={styles.userImg}/>
                        <View style={styles.userInfoText}>
                            <Text style={styles.userName}> Beeeeeeei</Text>
                        </View>
                    </View>
                    <View style={styles.postText}>
                        <Text> Hí anh em </Text> 
                    </View>
                    <View>
                        <Image
                        style={styles.postImg}
                        source={require('../assets/m.jpg')}/>
                    </View>
                    <View style={styles.Interaction}>
                        <View style={styles.like}>
                            <Text>Like</Text>
                        </View>
                        <View style={styles.like}>
                            <Text>Comment</Text>
                        </View>
                    </View>
                    <View style={styles.commentZone}>
                        <View >
                            <Text style={styles.commentPeople}>Be33</Text>
                        </View>
                        <View >
                            <Text style={{...styles.commentPeople, marginLeft:2}}>:</Text>
                        </View>
                        <View>
                            <Text style={{...styles.commentPeople, fontWeight:null,marginLeft:2}}>Dep zo</Text>
                        </View>
                    </View>
                    <View style={styles.commentZone}>
                        <View >
                            <Text style={styles.commentPeople}>Beeeeeee</Text>
                        </View>
                        <View >
                            <Text style={{...styles.commentPeople, marginLeft:2}}>:</Text>
                        </View>
                        <View>
                            <Text style={{...styles.commentPeople, fontWeight:null,marginLeft:2}}>iuuuuuuuuuuuuuuuuuuuuuuuuuu</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.userInfo}>
                        <Image
                        source={require('../assets/j.jpg')}
                        style={styles.userImg}/>
                        <View style={styles.userInfoText}>
                            <Text style={styles.userName}> Beeeeeeei</Text>
                        </View>
                    </View>
                    <View style={styles.postText}>
                        <Text> Hí anh em </Text> 
                    </View>
                    <View>
                        <Image
                        style={styles.postImg}
                        source={require('../assets/m.jpg')}/>
                    </View>
                    <View style={styles.Interaction}>
                        <View style={styles.like}>
                            <Text>Like</Text>
                        </View>
                        <View style={styles.like}>
                            <Text>Comment</Text>
                        </View>
                    </View>
                    <View style={styles.commentZone}>
                        <View >
                            <Text style={styles.commentPeople}>Be33</Text>
                        </View>
                        <View >
                            <Text style={{...styles.commentPeople, marginLeft:2}}>:</Text>
                        </View>
                        <View>
                            <Text style={{...styles.commentPeople, fontWeight:null,marginLeft:2}}>Dep zo</Text>
                        </View>
                    </View>
                    <View style={styles.commentZone}>
                        <View >
                            <Text style={styles.commentPeople}>Beeeeeee</Text>
                        </View>
                        <View >
                            <Text style={{...styles.commentPeople, marginLeft:2}}>:</Text>
                        </View>
                        <View>
                            <Text style={{...styles.commentPeople, fontWeight:null,marginLeft:2}}>iuuuuuuuuuuuuuuuuuuuuuuuuuu</Text>
                        </View>
                    </View>
                </View>
                </ScrollView>
                </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center"
        marginTop: Constants.StatusBar
    },
    scrollView: {
        marginHorizontal: 20,
      },
    card:{
        backgroundColor: '#f8f8f8',
        width: 333,
        marginBottom: 20,
        borderRadius: 10
    },
    userInfo:{
        flexDirection: "row",
        justifyContent: "flex-start",
        padding: 15
    },
    userImg:{
        width:50,
        height:50,
        borderRadius:25,
    },
    userName:{
        fontSize: 15,
        fontWeight: "bold"
    },
    userInfoText:{
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: 10
    },
    postText:{
        fontSize:15,
        paddingLeft: 15,
        paddingRight: 15,
    },
    postImg:{
        width:333,
        height:333,
        marginTop: 15,
        borderRadius:10,
    },
    Interaction:{
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 15,
    },
    commentZone:{
        flexDirection: "row",
    },
    commentPeople:{
        fontWeight:"bold",
        fontSize:15,
        marginLeft: 15,
        marginBottom: 15
    }
});
