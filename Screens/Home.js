import React, { useState } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import TodoList from "../Components/TodoList";
import { TodoData } from "../Data/ToDos";
import { useNavigation } from "@react-navigation/native";

export default function Home() {

const [LocalData, setLocalData] = useState(
    TodoData.sort((a, b) => {return a.isCompleted - b.isCompleted})
);

const [isHidden, setIsHidden] = useState(false);

const navigation = useNavigation();

const handleHiddenPress = () => {
    if (isHidden) {
        setIsHidden(false)
        setLocalData(TodoData.sort((a, b) => {return a.isCompleted - b.isCompleted}))
        return;
    }
    setIsHidden(!isHidden)
    setLocalData(LocalData.filter(todo => !todo.isCompleted))
};

    return(
        <View style={styles.container}>
            <Image
            source={{ uri: 'https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/reportajes/y-si-tu-perro-pudiera-vivir-cien-anos/9656705-1-esl-MX/Y-si-tu-perro-pudiera-vivir-cien-anos.jpg'}}
            style={styles.pic}
            />
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <Text style={styles.title}>
                    Today
                </Text>
                <TouchableOpacity onPress={handleHiddenPress}>
                    <Text style={{color:'#3478f6'}}>{isHidden ? 'Show Completed' : 'Hide Completed'}</Text>
                </TouchableOpacity>
            </View>
            <TodoList TodoData={LocalData.filter(todo => todo.isToday)}/>
            <Text style={styles.title}>
                Tomorrow
            </Text>
            <TodoList TodoData={TodoData.filter(todo => !todo.isToday)}/>

            <TouchableOpacity onPress={() => navigation.navigate('Add')}  style={styles.button}>
                <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:30,
        paddingHorizontal:15
    },
    pic:{
        width:42,
        height:42,
        borderRadius:21,
        alignSelf:'flex-end'
    },
    title:{
        fontSize:34,
        fontWeight:'900',
        marginBottom:35,
        marginTop:10
    },
    button:{
        width:42,
        height:42,
        borderRadius:21,
        backgroundColor:'#000',
        position:'absolute',
        bottom:30,
        right:25,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:.5,
        shadowRadius:5,
        elevation:5
    },
    plus:{
        fontSize:40,
        color:'#fff',
        position:'absolute',
        top:-7,
        left:9
    }
})