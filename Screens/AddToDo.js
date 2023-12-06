import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Switch } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AddToDo() {
    
    const [shown, setShown] = useState(true);

    const [name, setName] = useState('');

    const [date, setDate] = useState(new Date());

    const [isToday, setIsToday] = useState(false)

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Add Task</Text>
            <View style={{flexDirection:'row', justifyContent:'space-between', paddingBottom:30}}>
                <Text style={styles.inputTitle}>Name</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Task'
                    placeholderTextColor='#00000030'
                    onChangeText={(text) => {setName(text)}}
                />
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', paddingBottom:30}}>
                <Text style={styles.inputTitle}>Hour</Text>
                <DateTimePicker
                value={date}
                mode={'time'}
                is24Hour={true}
                disabled={shown}
                onChange={(event, selectedDate) => {setDate(selectedDate), setShown(false)}}
                style={{width:'80%'}}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f7f8fa',
        paddingHorizontal:30
    },
    title:{
        fontSize:34,
        fontWeight:'bold',
        marginBottom:35,
        marginTop:10,
    },
    inputTitle:{
        fontSize:20,
        fontWeight:'600',
        lineHeight:24
    },
    textInput:{
        borderBottomColor:'#00000030',
        borderBottomWidth:1,
        width:'80%',
        marginTop:-10
    }
})