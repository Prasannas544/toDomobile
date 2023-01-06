import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React ,{useState}from 'react'
import {firebase} from '../config'
import {useNavigation} from '@react-navigation/native'

const Detail = ({route}) => {
    const navigation = useNavigation();
    const [noteText, setNoteText] = useState(route.params.item.note);
    const [noteTitle, setNoteTitle] = useState(route.params.item.title);

    const handleUpdate = () => {
        if(noteTitle && noteTitle.length > 0){
            firebase.firestore().collection('notes').doc(route.params.item.id).update(
                {
                    title: noteTitle,
                    note: noteText,
                })
                .then(()=> {
                    navigation.navigate('Home');
                })
                .catch((error)=>{
                    alert(error);
                })
        }
    }

    //delete the note
    const handleDelete = () => {
        firebase.firestore().collection('notes').doc(route.params.item.id).delete()
        .then(()=> {
            navigation.navigate("Home");
        }).catch((error) => {
            alert(error);
        })
    }
  return (
    <View style={styles.container}>
      <TextInput placeholder='Title'
      value={noteTitle}
      onChangeText={(text)=> setNoteTitle(text)}
      style={styles.inputTitle}
      />
      <TextInput placeholder='Note'
      value={noteText}
      onChangeText={(text)=> setNoteText(text)}
      style={styles.inputNote}
      multiline={true}
      />
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button}
        onPress={handleUpdate}>
                <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        onPress={handleDelete}>
                <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        backgroundColor:"#c9f5d9"
    },inputTitle:{
        fontSize:18,
        fontWeight:"bold",
        marginTop:20,
        marginBottom:10,
        height:50,
        width:"97%",
        borderBottomWidth:1/2,
        borderLeftWidth:1/2,
        padding:10,
    },
    inputNote:{
        fontSize:16,
        marginTop:20,
        marginBottom:10,
        height:200,
        width:"97%",
        borderBottomWidth:1/2,
        borderLeftWidth:1/2,
        padding:10,
    },
    button:{
        backgroundColor:"red",
        borderRadius:20,
        marginTop:10,
        height:55,
        width:150,
        alignItems:"center",
        justifyContent:"center",
        elevation:7,
        shadowColor:"blue"
    }
    ,buttonText:{
        color:"white",
        fontSize:22,
        fontWeight:"bold"
    },buttonView:{
        flexDirection:'row',
       justifyContent:"space-around",
       width:"97%"
    }
})