import React from 'react';
import { TouchableOpacity, StyleSheet, View,Text } from 'react-native';
import {Button} from './button'

export function Body(props) {

    function renderList() {
        return props.list.map((item, index) =>
            <Row item={item} key={item.id}
                onDeleteClick={() => props.onDeleteClick(item.id)}
                onSelectClick={() => props.onSelectClick(item.id)}></Row>
        );
    }


    return (
        <View style={styles.container}>
            <View style={styles.row} >
                    <Text style={styles.titleContent} >Id</Text>
                    <Text style={styles.titleContent} >FirstName</Text>
                    <Text style={styles.titleContent} >LastName</Text>
                    <Text style={styles.titleContent} >Email</Text>
                    <Text style={styles.titleContent} >Score</Text>
                <Text style={styles.titleContent}> Action1</Text>
                <Text style={styles.titleContent}>Action2 </Text>
            </View>
            <View >
                {renderList()}
            </View>
        </View>
    );
}


function Row(props) {
    return (
        <View style={styles.row} >
            <Text style={styles.content} >{props.item.id}</Text>
            <Text style={styles.content} >{props.item.fname}</Text>
            <Text style={styles.content} >{props.item.lname}</Text>
            <Text style={styles.content} >{props.item.email}</Text>
            <Text style={styles.content} >{props.item.score}</Text>
            
            <Button title='Delete' onPress={() => props.onDeleteClick()}/>
            <Button title='Select' onPress={() => props.onSelectClick()}/>
        </View >
    );
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding:5
    },

    row: {
        backgroundColor: 'white',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#987654',
        padding: 10,
        marginBottom: 10,
        flexDirection: 'row',
        textAlign: 'center'
    },

    content: {
        flex: 1,
        fontSize: 12,
    },
        titleContent: {
        flex: 1,
        fontSize: 14,
        fontWeight: 'bold',
    },

});
