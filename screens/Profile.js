import React from 'react';
import { AsyncStorage } from 'react-native';
import {
  SafeAreaView, 
  ScrollView,
  View,
  Image,
  StyleSheet,
  Text,
} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = ({navigation}) => {
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{flex:1, justifyContent:"space-between", marginTop:20, marginLeft:330}}>
                        <MaterialCommunityIcons name="account-arrow-right" size={22} 
                                                onPress = {() => {
                                                    AsyncStorage.clear()
                                                    navigation.navigate('Login')
                                                }}/>
                    </View>
                    <View style={{alignSelf:"center"}}>
                        <View style={styles.profileImage}>
                            <Image
                            source={require('../assets/j.jpg')}
                            style={styles.image}
                            resizeMode="center"
                            />
                        </View>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={[styles.text, { fontWeight: "400", fontSize: 36 }]}>Beeeee</Text>
                        <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>Photographer</Text>
                    </View>
                    <View style={styles.statsContainer}>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 14 }]}>483</Text>
                        <Text style={[styles.text, styles.subText]}>Posts</Text>
                    </View>
                    <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                        <Text style={[styles.text, { fontSize: 14 }]}>45,844</Text>
                        <Text style={[styles.text, styles.subText]}>Followers</Text>
                    </View>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 14 }]}>302</Text>
                        <Text style={[styles.text, styles.subText]}>Following</Text>
                    </View>
                </View>
                <View style={{ marginTop: 32 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.mediaImageContainer}>
                            <Image source={require("../assets/m.jpg")} style={styles.image} resizeMode="cover"></Image>
                        </View>
                        <View style={styles.mediaImageContainer}>
                            <Image source={require("../assets/m.jpg")} style={styles.image} resizeMode="cover"></Image>
                        </View>
                        <View style={styles.mediaImageContainer}>
                            <Image source={require("../assets/m.jpg")} style={styles.image} resizeMode="cover"></Image>
                        </View>
                    </ScrollView>
                </View>
                </ScrollView>
            </SafeAreaView>
        )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    profileImage:{
        width:200,
        height:200,
        borderRadius:100,
        overflow:"hidden"
    },
    image:{
        flex:1,
        width: undefined,
        height:undefined,
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 32
    },
    statsBox: {
        alignItems: "center",
        flex: 1
    },
    subText: {
        fontSize: 12,
        color: "#AEB5BC",
        textTransform: "uppercase",
        fontWeight: "500"
    },
    mediaImageContainer: {
        width: 250,
        height: 250,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10
    },
    text: {
        color: "#52575D"
    }
});
export default ProfileScreen;