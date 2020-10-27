import React from 'react'
import {
  SafeAreaView, 
  ScrollView,
  View,
  Image,
  StyleSheet,
  Text,
} from 'react-native'

export default class CreateScreen extends React.Component {
    render(){
        return(
            <View style={styles.container}> 
                <Text> Profile </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    
});
