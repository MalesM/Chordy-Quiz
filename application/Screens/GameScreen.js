import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class GameScreen extends React.Component {

  onBtnPress(){}


  render() {
    return (
      <View style={styles.buttonsContainer}>
        <View style={styles.playButtonC}>
          <Button title='PLAY'  onPress={() => this.onBtnPress()} />
        </View>
        <View style={styles.upBtns}>
          <View style={styles.leftBtn}>
            <Button title='1'  onPress={() => this.onBtnPress()}/>
          </View>
          <View style={styles.rightBtn}>
            <Button title='2' onPress={() => this.onBtnPress()}/>
          </View>
        </View>
        <View style={styles.downBtns}>
          <View style={styles.leftBtn}>
            <Button title='3' onPress={() => this.onBtnPress()}/>
          </View>
          <View style={styles.rightBtn}>
          <Button title='4'onPress={() => this.onBtnPress()} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flex: 1,
    marginBottom: 60
  },
  playButtonC: {
    backgroundColor: 'green',
    flex: 3,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20

  },
  upBtns: {
    backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'


  },
  downBtns: {
    backgroundColor: 'blue',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftBtn: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },
  rightBtn: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  }

});