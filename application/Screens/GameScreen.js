import React from 'react';
import { Text, View, StyleSheet, Button, ActivityIndicator } from 'react-native';
import Chords from '../Config/Chords';
import Sound from 'react-native-sound';

export default class GameScreen extends React.Component {
  constructor(props) {
    super(props);

    this.samples = [];
    this.names = [];

    for(let a = 0; a < 4; a++){
      this.names.push(Chords[a]);
    }

    this.state = {
      chordsGame: []
    }

  }

  componentWillMount() {
    for (var i = 0; i < 4; i++) {
      this.samples.push(new Sound(Chords[i].sample, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        // loaded successfully

        console.log('success');
      }));
    }
    this.setState({
      chordsGame: this.names
    });

  }

  onBtnPress() { }


  render() {

    console.log('Prvo ucitavanje');
    return (

      <View style={styles.buttonsContainer}>
        {this.state.chordsGame.length === 0 ? <ActivityIndicator size="large" color="#0000ff" /> :
          <View style={{ flex: 1 }}>
            <View style={styles.playButtonC}>
              <Button title='PLAY' onPress={() => this.onBtnPress()} />
            </View>
            <View style={styles.upBtns}>
              <View style={styles.leftBtn}>
                <Button title={this.state.chordsGame[0].name} onPress={() => this.onBtnPress()} />
              </View>
              <View style={styles.rightBtn}>
                <Button title='2' onPress={() => this.onBtnPress()} />
              </View>
            </View>
            <View style={styles.downBtns}>
              <View style={styles.leftBtn}>
                <Button title='3' onPress={() => this.onBtnPress()} />
              </View>
              <View style={styles.rightBtn}>
                <Button title='4' onPress={() => this.onBtnPress()} />
              </View>
            </View>
          </View>}
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