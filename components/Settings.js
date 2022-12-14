import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
 

export default function Settings() {
    return (

        <View style={Styles.container}>
            <View>
                <Text style={Styles.head}>Settings</Text>
            </View>
            <View>
                <TouchableOpacity style={Styles.touch}>
                    <Text style={Styles.text}>Profile</Text>   
                </TouchableOpacity>
                <TouchableOpacity style={Styles.touch}>
                    <Text style={Styles.text}>Download</Text>   
                </TouchableOpacity> 
                <TouchableOpacity style={Styles.touch}>
                    <Text style={Styles.text}>About us</Text>   
                </TouchableOpacity>       
                <TouchableOpacity style={Styles.touch}>
                    <Text style={Styles.text}>Profile</Text>   
                </TouchableOpacity> 
            </View> 
        </View>
    )
}


const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
        padding: 10,
    },
    head: {
        color:'white',
        fontWeight: 'bold',
        fontSize: 40,
        margin: 10
    },
    text: {
        color:'white',
        // fontWeight: 'bold',
        fontSize: 20,
    },
    touch: {
        padding: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'white',

    }
})