import React from "react";
import { FlatList, Text, View } from "react-native";
import ToDo from "./Todo";

export default function TodoList({TodoData}) {
    return(
        <FlatList
            data={TodoData}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => 
            <ToDo {... item}/>
        }
        />
    )
}