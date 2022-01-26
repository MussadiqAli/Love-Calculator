import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View,Text, Alert, Image } from 'react-native';
import {TextInput, Appbar, Button  } from 'react-native-paper';
import DisplayLove from './components/DisplayLove'


export default class App extends React.Component {
  state={
    fname: '',
    sname: '',
    result: '',
  }

  


  submit(){
    this.setState({
      result: 'loading'
    })
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`,
    {headers:{
      "x-rapidapi-key": "b3179b41femsh4083c61cc470541p13ceeejsn35457a7d9344",
      "x-rapidapi-host": "love-calculator.p.rapidapi.com"
      // "useQueryString": true
    }})
    .then(data => data.json())
    .then(data2 => {
      this.setState({
        result: data2,
        fname: '',
        sname: ''
      })
    })
  }


  render(){
  
    return (
      <View style={styles.container}>

        {/* ==============App header========== */}
        <Appbar.Header style={{backgroundColor: 'red', }}>
          <Appbar.Content 
            title="Love % Calculator"
            style={{alignItems:"center",}}
            dark= "true"
          />
        </Appbar.Header>
        


        <View style={{paddingLeft:20, paddingRight:20}}>
          <TextInput
            label="Person1(male)"
            value={this.state.fname}
            onChangeText={text => this.setState({fname: text})}
            mode= 'outlined'
            style={styles.inputText}
            theme={{colors: {primary: 'red', underlineColor: 'transparent'}}}
          />
          <TextInput
            label="Person2(female)"
            value={this.state.sname}
            onChangeText={text => this.setState({sname: text})}
            mode= 'outlined'
            style={styles.inputText}
            theme={{colors: {primary: 'red', underlineColor: 'transparent'}}}
          />

          <Button icon="alarm" mode="contained" 
          style={{marginBottom: 20, marginTop:10, backgroundColor: 'red'}}
          onPress={this.submit.bind(this)}>
            Calculate
          </Button>
        </View>


        <DisplayLove data={this.state.result} />

      </View>
    );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  inputText: {
   marginTop:5,
  
  },
 });
