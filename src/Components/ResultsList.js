import React from 'react'
import {View, Text, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ResultDetails from './ResultDetails'

const ResultsList = ({title,results}) => {
    
    return <View style = {Styles.container}> 
            <Text style = {Styles.titleStyle}> {title}</Text>
            <Text style> Total results found {results.length}</Text>

            <FlatList 
                keyExtractor = {results => {return results.restaurant.id}}
                horizontal
                data = {results}
               // renderItem = { ({item}) => { return <Text>{item.restaurant.name}</Text>}  }
               renderItem = { ({item}) => { return  <ResultDetails result = {item.restaurant}/> }}
               showsHorizontalScrollIndicator = {false}
             />
        </View>
};

const Styles = StyleSheet.create({

    titleStyle :{
        fontSize : 14,
        fontWeight: 'bold'
        
    } ,

    container : {
        marginBottom : 15
    }



    
})

export default ResultsList