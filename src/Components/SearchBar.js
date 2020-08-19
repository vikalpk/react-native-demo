import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import { TextInput, Directions } from 'react-native-gesture-handler';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {

    return <View style={Styles.backgroundStyle}>
        <EvilIcons name="search" color="black" style={Styles.iconStyle} />
        <TextInput placeholder="Search" 
        style={Styles.inputStyle}
        autoCapitalize = "none"
        autoCorrect ={false} 
        value= {term}
        onChangeText = {newTerm => onTermChange(newTerm)}
        onEndEditing = {onTermSubmit}
        />
    </View>

};

const Styles = StyleSheet.create({

    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15,
        flexDirection: "row",
        marginTop: 10

    },
    inputStyle: {
        fontSize: 18,
        flex: 1
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15

    }
})

export default SearchBar;