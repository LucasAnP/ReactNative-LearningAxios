import React from 'react';
import {View, Text, Image} from 'react-native';

function DetailScreen({navigation, route}){
  const {pokemon} = route.params;
  const {name, weight, sprites} = pokemon;
  return(
    <View style ={{flex:1, alignItems:'center', justifyContent:'center'}} >
      <Image source={{uri:sprites.front_default}}
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
      <Text style = {{fontSize:12, textAlign:'center'}} >{weight}</Text>
    </View>
  )
}

export default DetailScreen;