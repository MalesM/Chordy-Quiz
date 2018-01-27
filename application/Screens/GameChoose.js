import React from 'react';
import { View, Button, StyleSheet } from 'react-native'

export default class GameChoose extends React.Component {

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, paddingBottom: 10, alignItems: 'center', justifyContent: 'flex-end'}}>
          <Button title='10 questions' onPress={() => navigate('Game', {q: 10})}/>
        </View>
        <View style={{flex: 1, paddingTop: 10, alignItems: 'center'}}>
          <Button title='20 questions' onPress={() => navigate('Game', {q: 20})}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});