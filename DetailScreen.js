import React from 'react';
import {View, Text, Image} from 'react-native';

function DetailScreen({navigation, route}){
  const {user} = route.params;
  const {name, bio, avatar_url} = user;
  return(
    <View style ={{flex:1, alignItems:'center', justifyContent:'center'}} >
      <Image source={{uri:avatar_url}} 
        style={{
          width:120,
          height:120,
          borderRadius:60,
          marginBottom:20,
          borderWidth:5,
          borderColor:'white',

        }}
      ></Image>
      <Text style ={{fontSize:20, textAlign:'center'}} >{name}</Text>
      <Text style = {{fontSize:12, textAlign:'center'}} >{bio}</Text>
    </View>
  )
}

export default DetailScreen;