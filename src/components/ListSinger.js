import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList, Image } from 'react-native';
import Singer from './Singer';

import getAllSinger from '../api/getAllSingers';

StatusBar.setHidden(true);

export default class ListSinger extends Component {
    constructor(props) {
      super(props);
      this.state = {
        arrSingers: []
      }
    }
  
    componentDidMount() {
      getAllSinger()
      .then(singers => this.setState({ arrSingers: singers }));
    }
  
    render() {
      return (
        <View style={styles.container}>
            <FlatList 
              data={this.state.arrSingers}
              renderItem={({ item }) => <Singer item={item} />}
              keyExtractor={item => item.id}
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