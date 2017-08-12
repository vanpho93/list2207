import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';

StatusBar.setHidden(true);

const arrWords = [
    { en: 'Hello', vn: 'Chao buoi sang' },
    { en: 'mouse', vn: 'Chuot' },
    { en: 'keyboard', vn: 'Ban phim' }
];

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
          <FlatList 
            data={arrWords}
            renderItem={({ item }) => <Text>{item.en}</Text>}
            keyExtractor={item => item.en}
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

