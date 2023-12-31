import React from "react";
import { StyleSheet, View, Text } from "react-native";
import CheckBox from "./CheckBox";

export default function ToDo({
    id,
    text,
    isCompleted,
    isToday,
    hour
}){
    return(
        <View style={styles.container}>
            <CheckBox 
            id={id}
            text={text}
            isCompleted={isCompleted}
            isToday={isToday}
            hour={hour}/>
            <View>
                <Text style={
                    isCompleted 
                    ? [styles.text, {textDecorationLine:'line-through', color:'#a3a3a3'}]
                    : styles.text
                    }>
                    {text}
                </Text>
                <Text style={
                    isCompleted 
                    ? [styles.time, {textDecorationLine:'line-through', color:'#a3a3a3'}]
                    : styles.time
                }>
                    {hour}
                </Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        marginBottom:20,
        flexDirection:'row',
        alignItems:'center'
    },
    text:{
        fontSize:15,
        fontWeight:'500',
        color:'#737373'
    },
    time:{
        fontSize:13,
        color:'#a3a3a3',
        fontWeight:'500'
    }
})