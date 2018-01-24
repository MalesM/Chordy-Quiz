import React from 'react';
import { View, StyleSheet, Text, Button, Image } from 'react-native';

export default class ChordListItem extends React.Component{
  constructor(props){
    super(props);
  }

  play (){
    this.props.playChord(this.props.id);
  };


  render(){
    return(
      <View style={styles.container}> 
        <Image source={this.props.imageSource} style={{height:100, width:100}}/>
        <Text>{this.props.chordName}</Text>
        <Button title='play' onPress={() => this.play()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    margin: 5

  }
});