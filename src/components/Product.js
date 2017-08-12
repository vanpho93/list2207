import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class Product extends Component {
    render() {
        const { item } = this.props;
        return (
            <View>
                <Text>{item.name}</Text>
                <Image 
                source={{ uri: 'http://localhost:3000/' + item.image }}
                style={{ width: 100, height: 100 }}
                />
            </View>
        );
    }
}