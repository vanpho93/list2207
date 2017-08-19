import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, View, 
    StatusBar, 
    FlatList, 
    Image, 
    RefreshControl 
} from 'react-native';
import Singer from './Singer';

import getAllSinger from '../api/getAllSingers';

StatusBar.setHidden(true);

export default class ListSinger extends Component {
    constructor(props) {
      super(props);
      this.state = {
        arrSingers: [],
        refreshing: false,
        maxCurrentId: 0
      }
    }
    componentDidMount() {
        this.setState({ refreshing: true });
        getAllSinger()
        .then(singers => this.setState({ arrSingers: singers, refreshing: false }));
    }
    render() {
      return (
        <View style={styles.container}>
            <FlatList 
              data={this.state.arrSingers}
              renderItem={({ item }) => <Singer item={item} />}
              keyExtractor={item => item.id}
              refreshControl={
                  <RefreshControl 
                    refreshing={this.state.refreshing}
                    onRefresh={() => {}}
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