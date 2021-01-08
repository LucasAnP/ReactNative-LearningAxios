import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, ActivityIndicator} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';

function HomeScreen({navigation}){
 //useState para receber valor
 const[user, setUser] = useState('niubajr19');
 const[loading, setLoading] = useState(false);

 const url = `https://api.github.com/users/${user}`;

 const submit = async() => {
   // Demora, não acontece instantaneamente. (asynx, await)
   setLoading(true)
   
   try{
    const response = await axios.get(url);
    navigation.navigate('Detail', {user:response.data});
   }catch(error){
     alert('Usuário não encontrado, tente novamente');
   }

  setLoading(false);
  }
  return(
    <View style ={{flex:1, alignItems:'center', justifyContent:'center'}} >
      <Text style={styles.title} >Buscar Usuário</Text>
      <TextInput style={styles.input} value={user} onChangeText={setUser} ></TextInput>
      <TouchableOpacity 
      disabled={loading}
      style={styles.button} title="Nova Tela" onPress={ () => {
        //navigation.navigate('Detail');
        submit();
      }} >

        {loading ===false && <Text style={styles.textButton} >Buscar</Text>}
        {loading == true && <ActivityIndicator color='white'/>}
      </TouchableOpacity>
    </View>
    
  )
}

const styles = StyleSheet.create({
  title:{
    fontSize:20
  },
  input:{
    width:200,
    borderRadius:4,
    height:40,
    textAlign:'center',
    marginVertical:10,
    backgroundColor:'#DDDDDD'
  },
  button:{
      width:200,
      borderRadius:4,
      height:40,
      textAlign:'center',
      marginVertical:10,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'red'
  },
  textButton:{
    color:'#fff',
    fontWeight:'bold'
  }
})

export default HomeScreen;