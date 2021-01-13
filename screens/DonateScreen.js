import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert,Modal} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';

export default class DonateScreen extends React.Component {

    render(){
        return(
            <View>
                 <MyHeader
               title="Donate Book"
               /> 
            </View>
        )
    }
}