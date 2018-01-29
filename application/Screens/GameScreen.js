import React from 'react';
import { Text, View, StyleSheet, Button, ActivityIndicator, ToastAndroid, Alert } from 'react-native';
import ChordsGame from '../Config/ChordsGame';
import Sound from 'react-native-sound';

export default class GameScreen extends React.Component {
  constructor(props) {
    super(props);

    this.questionNumber = this.props.navigation.state.params.q;
    this.playFlag = false;
    this.question = 0;
    this.score = 0;

    this.samples = [];

    for(let i = 0; i < ChordsGame.length; i++){
      this.samples.push(new Sound(ChordsGame[i].sample, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
      }));
    }

    this.state = {
      //chordsGame: [],
      //chordSamples: [],
      answer: 0,
      element: 0,
      position: 0,

      color0: '#A2A9CE',
      color1: '#A2A9CE',
      color2: '#A2A9CE',
      color3: '#A2A9CE',

    }

  }

  getAnswer() {
    let upBorder, downBorder;
    let element = Math.floor(Math.random() * ChordsGame.length);
    let position = Math.floor(Math.random() * 4);

    if (element < ChordsGame.length / 2) {
      downBorder = 0; upBorder = ChordsGame.length / 2;
    } else {
      downBorder = ChordsGame.length / 2;
      upBorder = ChordsGame.length;
    }

    if ((element - position) < downBorder) {
      position = element - downBorder;
    }
    if ((element - position + 3) > (upBorder - 1)) {
      position = element - upBorder + 4;
    }

    this.setState({
      element: element,
      position: position,

      color0: '#A2A9CE',
      color1: '#A2A9CE',
      color2: '#A2A9CE',
      color3: '#A2A9CE',
    })
  }

  deleteSamples(ns){
    for(let i = 0; i < ns.length; i++){
      ns[i].release();
    }
  }

  componentWillMount() {
    this.getAnswer();
  }

  componentWillUnmount(){
    this.deleteSamples(this.samples);
  }

  onBtnPress(pos) {
    if (this.playFlag === true) {
     
      this.samples[this.state.element - this.state.position + pos].play();

      if (pos === this.state.position) {
        ToastAndroid.showWithGravity('Correct', ToastAndroid.SHORT, ToastAndroid.CENTER);
        this.score++;
        this.question++;
      } else {
        ToastAndroid.showWithGravity('Wrong', ToastAndroid.SHORT, ToastAndroid.CENTER);
        this.question++;
      }

      switch (this.state.position) {
        case 0:
          this.setState({
            color0: '#79F054'
          });
          break;
        case 1:
          this.setState({
            color1: '#79F054'
          });
          break;
        case 2:
          this.setState({
            color2: '#79F054'
          });
          break;
        case 3:
          this.setState({
            color3: '#79F054'
          });
          break;
      }

      if(this.question === this.questionNumber){
        Alert.alert(
          `Your score is ${this.score}/${this.questionNumber}`,
          'Play again?',
          [
            {text: 'no', onPress: () => this.props.navigation.navigate('Home')},
            {text: 'yes', onPress: () => this.resetGame()}
          ],
          {cancelable: false}
        );
      }else setTimeout(() => { this.getAnswer(); this.playFlag = false; }, 500);
      this.playFlag = false;

    } else {
      ToastAndroid.showWithGravity('Play first!', ToastAndroid.SHORT, ToastAndroid.CENTER);
    }
  }

  onPlayBtn() {
    this.samples[this.state.element].play();
    this.playFlag = true;
  }

  resetGame(){
    this.playFlag = false;
    this.question = 0;
    this.score = 0;

    this.setState ( {
      chordsGame: [],
      chordSamples: [],
      answer: 0,
      color0: '#A2A9CE',
      color1: '#A2A9CE',
      color2: '#A2A9CE',
      color3: '#A2A9CE',

    });
    this.getAnswer();
  }

  render() {

    return (

      <View style={styles.buttonsContainer}>
        {this.samples.length !== ChordsGame.length ? <ActivityIndicator size="large" color="#0000ff" /> :
          <View style={{ flex: 1 }}>
            <View style={{alignItems: 'center', marginTop: 10}}>
              <Text>{`Score: ${this.score}/${this.questionNumber}`}</Text>
            </View>
            <View style={styles.playButtonC}>
              <Button title='PLAY' onPress={() => this.onPlayBtn()} />
            </View>
            <View style={styles.upBtns}>
              <View style={styles.leftBtn}>
                <Button title={ChordsGame[this.state.element - this.state.position].name} onPress={() => this.onBtnPress(0)} color={this.state.color0} />
              </View>
              <View style={styles.rightBtn}>
                <Button title={ChordsGame[this.state.element - this.state.position + 1].name} onPress={() => this.onBtnPress(1)} color={this.state.color1} />
              </View>
            </View>
            <View style={styles.downBtns}>
              <View style={styles.leftBtn}>
                <Button title={ChordsGame[this.state.element - this.state.position + 2].name } onPress={() => this.onBtnPress(2)} color={this.state.color2} />
              </View>
              <View style={styles.rightBtn}>
                <Button title={ChordsGame[this.state.element - this.state.position + 3].name } onPress={() => this.onBtnPress(3)} color={this.state.color3} />
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
    //backgroundColor: '#f00000',
    flex: 3,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20

  },
  upBtns: {
    //backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'


  },
  downBtns: {
    //backgroundColor: 'blue',
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