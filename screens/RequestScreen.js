import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert,Modal} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';
import { KeyboardAvoidingView } from 'react-native';

export default class RequestScreen extends React.Component {
    constructor(){
        super()
        this.state={
            userId:firebase.auth().currentUser.email,
            bookName:"",
            reasonToRequest:""
        }
    }
    createUniqueId(){
        return Math.random().toString(36).substring(7)
    }
    addRequest=(bookName,reasonToRequest)=>{
     var userId=this.state.userId
     var randomRequestId=this.createUniqueId()
     db.collection('bookRequest').add({
         userId:userId,
         bookName:bookName,
         reasonToRequest:reasonToRequest,
         requestId:randomRequestId
     })
    }

    render(){
        return(
            <View>
               <MyHeader
               title="Request Book"
               />
               <KeyboardAvoidingView>
               <TextInput
            style={styles.formTextInput}
          placeholder="Enter Book Name"
          onChangeText={(text)=>{
           this.setState({
             bookName:text
           })
          }}
          />
           <TextInput
            style={styles.formTextInput}
          placeholder="Why do you need this book?"
          multiline={true}
          onChangeText={(text)=>{
           this.setState({
             reasonToRequest:text
           })
          }}
          />
          <TouchableOpacity onPress={()=>{
              this.addRequest(bookName,reasonToRequest)
          }}>
              <Text>Request</Text>
          </TouchableOpacity>
       </KeyboardAvoidingView>
            </View>
        )
           
        
    }
}
const styles = StyleSheet.create({
formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10
  },
})