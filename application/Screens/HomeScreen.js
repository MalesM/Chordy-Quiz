import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default class HomeScreen extends React.Component {

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.buttonsWrap}>
        <View style={styles.buttonContainer}>
          <Button
            style={{ height: 50 }}

            title='Game'
            onPress={() => navigate('Game')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button

            title='chords'
            onPress={() => navigate('Chords')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  buttonContainer: {
    padding: 10,
    justifyContent: 'center',

    height: 50,
    width: 200,

  }
});