import React, { Component } from 'react';
import {Audio} from 'expo-av';
import { StyleSheet, Text, TouchableOpacity, View,Alert } from 'react-native';



export default class App extends Component  {
  async playSound(url){
    try{
      await Audio.setIsEnabledAsync(true)
      var playBackObject = await Audio.Sound.createAsync(
        {uri:url},
        {shouldPlay:true}
      )
    }catch(error){
      console.log()
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity style = {styles.blueButton} onPress = {()=>{
          var url = "http://www.rickshriver.net/sounds/Bamboo%20Flute/bamboo%20flute%20800hz.wav"
          this.playSound(url)
          
        }}>
          <Text>sound 1</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.redButton} onPress = {()=>{
          var url = "http://www.phatdrumloops.com/audio/wav/footsteps.wav"
          this.playSound(url)

        }}>
          <Text>sound 2</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style = {styles.greenButton} onPress = {()=>{
          var url = "http://www.playinmusic.com/Samples/Dean%20Slap%20Best/BassAmbSlap%20122%208c.mp3"
          this.playSound(url)
        }}>
          <Text>sound 3</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style = {styles.pinkButton} onPress = {()=>{
          var url = "http://www.conceptapprovals.com/NHPO-Graphics/Instruments/CLARINET.WAV"
          this.playSound(url)
        }}>
          <Text>sound 4</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.yellowButton} onPress = {()=>{
          var url = "http://www.ringelkater.de/Sounds/2geraeusche_gegenst/HARFE.WAV"
          this.playSound(url)
        }}>
          <Text> sound 5</Text>
        </TouchableOpacity>
       
        <TouchableOpacity style = {styles.purpleButton} onPress = {Alert.alert("Button Pressed")}>
          <Text> Stop sound</Text>
        </TouchableOpacity>
       
        </View>

    
    

    );
  }
  }
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
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

  purpleButton:{
    width:250,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:100,
    borderWidth:2,
    borderColor:"black",
    marginTop:20,
    backgroundColor:"purple",
  },



  
});

//test
