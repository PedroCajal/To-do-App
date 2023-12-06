import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function CheckBox({
    id,
    text,
    isCompleted,
    isToday,
    hour
}) {
    return isToday ? (
        <TouchableOpacity style={isCompleted ? styles.checked : styles.unChecked}>
            {isCompleted && <AntDesign name='check' size={16} color='#fff'/>}
        </TouchableOpacity>
    ) : (
        <View style={styles.isToday}/>
    )
}

const styles = StyleSheet.create({
    checked:{
        width:20,
        height:20,
        marginRight:13,
        borderRadius:6,
        backgroundColor:'#262626',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:15,
        shadowColor:'#000',
        shadowOffset: {
            width:0,
            height:2
        },
        shadowOpacity:.3,
        shadowRadius:5,
        elevation:5
    },
    unChecked:{
        width:20,
        height:20,
        marginRight:13,
        borderRadius:6,
        borderColor:'#e8e8e8',
        backgroundColor:'#fff',
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:15,
        shadowColor:'#000',
        shadowOffset: {
            width:0,
            height:2
        },
        shadowOpacity:.1,
        shadowRadius:5,
        elevation:5
    },
    isToday:{
        width:10,
        height:10,
        marginHorizontal:10,
        borderRadius:10,
        backgroundColor:'#262626',
        marginRight:13,
        marginLeft:15
    }
})