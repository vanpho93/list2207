import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList, Image } from 'react-native';
import getAllProduct from '../api/getAllProducts';
import Product from './Product';
StatusBar.setHidden(true);

export default class ListSinger extends Component {
    constructor(props) {
      super(props);
      this.state = {
        arrProducts: []
      }
    }
  
    componentDidMount() {
      getAllProduct()
      .then(products => this.setState({ arrProducts: products }));
    }
  
    render() {
      return (
        <View style={styles.container}>
            <FlatList 
              data={this.state.arrProducts}
              renderItem={({ item }) => <Product item={item} />}
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