import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export function Button(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onPress}>
                <View style={styles.button}>
                    <Text style={styles.text}>{props.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        padding: 5,
        backgroundColor: 'purple',
        borderRadius: 3,
        marginHorizontal:5,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
    },
});