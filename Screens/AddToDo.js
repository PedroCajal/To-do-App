import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Switch } from 'react-native';
import DatePicker from 'react-native-date-picker';

export default function AddToDo() {
    
    const [showText, setShowText] = useState(false)
    const [name, setName] = useState('');

    const [date, setDate] = useState(new Date());

    const [isToday, setIsToday] = useState(false)

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Add Task</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Name</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Task'
                    placeholderTextColor='#00000030'
                    onChangeText={(text) => {setName(text)}}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Hour</Text>
                {showText &&<DatePicker
                    date={date}
                    mode='time'
                    open={showText}
                    modal
                    onConfirm={(date) => {
                        setShowText(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        setShowText(false)
                    }}
                    />}
                    <TouchableOpacity onPress={() => setShowText(true)} style={styles.dateInput}>
                        <Text style={{fontSize:20}}>{date.getHours()}:{date.getMinutes()}</Text>
                    </TouchableOpacity>

            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Today</Text>
                <Switch
                    value={isToday}
                    onValueChange={(value) => { setIsToday(value)}}/>
            </View>              
            <TouchableOpacity style={styles.button}>
                    <Text style={{color:'white'}}>Done</Text>
            </TouchableOpacity>
            <Text style={{marginLeft:15,color:'#00000060'}}>If you disable today, the task will be considered as tomorrow</Text>
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
    dateInput:{
        borderBottomColor:'#00000030',
        borderBottomWidth:1,
        paddingLeft:6,
        width:50,
        backgroundColor:'#D9D9D9',
        borderRadius:10
    },
    textInput:{
        fontSize:14,
        borderBottomColor:'#00000030',
        borderBottomWidth:1,
        width:'80%',
        marginTop:-12
    },
    inputContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingBottom:30
    },
    button:{
        marginTop:50,
        marginBottom:15,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#000000',
        height:46,
        borderRadius:11
    }
})