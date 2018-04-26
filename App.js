import React from 'react';
import { View,StatusBar } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style = {{flex : 1, flexDirection : 'row', justifyContent : 'center', alignItems : 'center'}}>
        <StatusBar hidden = {true}/>
        <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'yellow'}} />
        
        
      </View>
    );
  }
}

