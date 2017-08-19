import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, View, 
    StatusBar, 
    FlatList, 
    Image, 
    RefreshControl,
    TouchableOpacity 
} from 'react-native';
import Singer from './Singer';

import getSingersByMaxId from '../api/getAllSingers';
import addNewSinger from '../api/addNewSinger';

StatusBar.setHidden(true);

export default class ListSinger extends Component {
    constructor(props) {
      super(props);
      this.state = {
        arrSingers: [],
        refreshing: false
      };
      this.onAddNewSinger = this.onAddNewSinger.bind(this)
    }

    onAddNewSinger() {
      addNewSinger('A', 'B')
      .then(() => console.log('Post thanh cong'))
      .catch(() => console.log('Post that bai'));
    } 

    componentDidMount() {
        this.setState({ refreshing: true });
        getSingersByMaxId(0)
        .then(singers => this.setState({ arrSingers: singers, refreshing: false }));
    }

    _onRefesh() {
        this.setState({ refreshing: true });
        const arrId = this.state.arrSingers.map(singer => singer.id);
        const maxId = Math.max(...arrId); 
        // const maxId = Math.max(1, 2, 3); 
        getSingersByMaxId(maxId)
        .then(singers => this.setState((prevState) => ({ 
            arrSingers: singers.concat(prevState.arrSingers), 
            refreshing: false 
        })));
    }

    render() {
      return (
        <View style={styles.container}>
            <TouchableOpacity onPress={this.onAddNewSinger}>
                <Text>Post</Text>
            </TouchableOpacity>
            <FlatList 
              data={this.state.arrSingers}
              renderItem={({ item }) => <Singer item={item} />}
              keyExtractor={item => item.id}
              refreshControl={
                  <RefreshControl 
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefesh.bind(this)}
                  />
              }
            />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5'
    }
  });