import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, TouchableOpacity, View,Alert } from 'react-native';



export default class App extends Component  {
  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity style = {styles.blueButton} onPress = {Alert.alert("Button Pressed")}>
          <Text>sound 1</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.redButton} onPress = {Alert.alert("Button Pressed")}>
          <Text>sound 2</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style = {styles.greenButton} onPress = {Alert.alert("Button Pressed")}>
          <Text>sound 3</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style = {styles.pinkButton} onPress = {Alert.alert("Button Pressed")}>
          <Text>sound 4</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.yellowButton} onPress = {Alert.alert("Button Pressed")}>
          <Text> sound 5</Text>
        </TouchableOpacity>
       
        </View>

    
    

    );
  }
  }
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  blueButton:{
    width:200,
    height:100,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:100,
    borderWidth:2,
    borderColor:"black",
    marginTop:20,
    backgroundColor:"lightblue",
  },

  redButton:{
    width:200,
    height:100,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:100,
    borderWidth:2,
    borderColor:"black",
    marginTop:20,
    backgroundColor:"red",
  },

  greenButton:{
    width:200,
    height:100,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:100,
    borderWidth:2,
    borderColor:"black",
    marginTop:20,
    backgroundColor:"lightgreen",
  },

  pinkButton:{
    width:200,
    height:100,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:100,
    borderWidth:2,
    borderColor:"black",
    marginTop:20,
    backgroundColor:"lightpink",
  },

  yellowButton:{
    width:200,
    height:100,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:100,
    borderWidth:2,
    borderColor:"black",
    marginTop:20,
    backgroundColor:"yellow",
  },



  
});
