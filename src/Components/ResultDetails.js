import React from 'react'
import {View, Image, Text, StyleSheet } from 'react-native'


const ResultDetails = ({result}) => {
    return <View style= {Styles.container}>
        <Image 
            source = {{uri: result.thumb}}
            style = {Styles.imageStyle}
        /> 
        <Text> {result.name}</Text>
        <Text> Avg. Cost for 2 - Rs {result.average_cost_for_two}</Text>
    </View>
};

const Styles = StyleSheet.create({

    container :{
        marginLeft: 10,

    },  

    imageStyle : {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom : 10

    },

    nameStyle : {

        fontWeight: "bold"
    }
})

export default ResultDetails;