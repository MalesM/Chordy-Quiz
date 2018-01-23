import {StackNavigator} from 'react-navigation';
import HomeScreen from '../Screens/HomeScreen';
import ChordList from '../Screens/ChordList';
import GameScreen from '../Screens/GameScreen'

const RootNavigator = StackNavigator({

  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Chordy'
    }
  },
  Chords: {
    screen: ChordList,
    navigationOptions: {
      headerTitle: 'Chord List'
    }
  },
  Game: {
    screen: GameScreen,
    navigationOptions: {
      headerTitle: 'Game'
    }
  }

});

export default RootNavigator;