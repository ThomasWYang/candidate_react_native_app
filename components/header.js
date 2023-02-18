import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, TextInput } from 'react-native';
import {Button} from './button'

export function Header(props) {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    let onFnameChange = e => setFname(e.target.value);
    let onLnameChange = e => setLname(e.target.value);
    let onEmailChange = e => setEmail(e.target.value);
    
    const [fname2, setFname2] = useState('');
    const [lname2, setLname2] = useState('');
    const [email2, setEmail2] = useState('');
    const [score2, setScore2] = useState('');
    const [hiddenId, setHiddenId] = useState(true);
    const [upsert, setUpsert] = useState('Add');
    const [upsert2, setUpsert2] = useState('Update');
    const [styleFlex, setStyleFlex] = useState(styles.input);

    let onFnameChange2 = e => setFname2(e.target.value);
    let onLnameChange2 = e => setLname2(e.target.value);
    let onEmailChange2 = e => setEmail2(e.target.value);
    let onScoreChange2 = e => setScore2(e.target.value);


    let onSearchClick = () => {
        return props.onSearchClick(fname, lname, email);
       
    };
    let onUpsertClick = () => {
        // setTimeout(() => {
        //     setFname2('');
        //     setLname2('');
        //     setEmail2('');
        //     setScore2('');
        //  }, 5000);
        if (upsert === 'Add')
            return props.onAddClick(fname2, lname2, email2, score2);
        else
            return props.onUpdateClick(props.selected,fname2, lname2, email2, score2);
    }

    let onSwitchClick = () => {
        if (upsert === 'Add') {
            setUpsert('Update');
            setUpsert2('Add');
            setHiddenId(false);
            setStyleFlex(styles.input3);
        } else {
            setUpsert('Add');
            setUpsert2('Update');
            setHiddenId(true);
            setStyleFlex(styles.input);
        }

    }
    let onOrderClick = () => {
        return props.onOrderClick();
    }
    const ShowId = () =>{
        if (upsert === 'Update') {
            return <TextInput value={props.selected} style={styles.label} readOnly></TextInput>
        } else {
            return null;
        }
    };

    return (
        
        <View style={styles.container}>
            <View>
                <View style={styles.row}>
                    <TextInput value={fname} onChange={onFnameChange} style={styles.input} placeholder='First Name'></TextInput>
                    <TextInput value={lname} onChange={onLnameChange} style={styles.input} placeholder='Last Name'></TextInput>
                </View>
                    <View style={styles.row}>
                    <TextInput value={email} onChange={onEmailChange} style={styles.input2} placeholder='Email'></TextInput>
                </View>
                <View style={styles.row}>
                    <Button title='Search'  onPress={onSearchClick}/>
                    <Button title='Order By Score' onPress={onOrderClick} />
                </View>
            </View>

            <View >
                <View style={styles.row}>
                <ShowId/>
                {/* <TextInput value={props.selected} style={styles.label} hidden={hiddenId} readOnly></TextInput> */}
                <TextInput value={fname2} onChange={onFnameChange2} style={styleFlex} placeholder='First Name'></TextInput>
                <TextInput value={lname2} onChange={onLnameChange2} style={styleFlex} placeholder='Last Name'></TextInput>
                </View>
                <View style={styles.row}>
                    <TextInput value={email2} onChange={onEmailChange2} style={styles.input} placeholder='Email'></TextInput>
                    <TextInput value={score2} onChange={onScoreChange2} style={styles.input} placeholder='Score'></TextInput>
                    </View>
                 <View style={styles.row}>
                    <Button title={upsert} onPress={onUpsertClick} />
                    <Button title={"Switch to " + upsert2} onPress={onSwitchClick} />
                 </View>
         </View>
    </View>

    );
}


const styles = StyleSheet.create({
    container: {
        width:'100%'
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 10,
    },
        input: {
            padding: 10,
            marginHorizontal: 5,
            placeholderTextColor: "lightslategrey",
            backgroundColor: 'lightcyan',
            color: "purple",
            fontWeight:"bold",
        width: '50%',
        borderRadius: 3,
    },
        input2: {
        padding: 10,
        marginHorizontal:5,
        width: '100%',
            placeholderTextColor: "lightslategrey",
            backgroundColor: 'lightcyan',
            color: "purple",
            fontWeight:"bold",
        borderRadius: 3,
    },
        input3: {
        padding: 10,
        marginHorizontal:5,
        width: '45%',
            placeholderTextColor: "lightslategrey",
            backgroundColor: 'lightcyan',
            color: "purple",
            fontWeight:"bold",
        borderRadius: 3,
    },
        label: {
            padding: 10,
            marginHorizontal:5,
        width: '10%',
            placeholderTextColor: "lightslategrey",
            backgroundColor: 'lightcyan',
            color: "purple",
            fontWeight:"bold",
        borderRadius: 3,
    },

});

