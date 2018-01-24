import React from 'react';
import { Text, FlatList } from 'react-native';
import ChordListItem from '../Components/ChordListItem';

import Chords from '../Config/Chords';

export default class ChordList extends React.Component{

  _playChord (idd) {
    console.log(idd);
  }

  render(){
    return(
      <FlatList 
        data={Chords}
        renderItem={ 
          ({item}) => <ChordListItem 
                        imageSource={item.image}
                        chordName={item.name}
                        id={`chord ${item.name}`}
                        playChord={(id) => this._playChord(id)} 
                      />
        }
      />
    );
  }
}


{/* <Image
          style={{width:100, height:100}}
          source={require('../Resources/Images/a.png')}
        /> */}