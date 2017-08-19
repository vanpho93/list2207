import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class Product extends Component {
    render() {
        const { item } = this.props;
        return (
            <View>
                <Text>{item.name}</Text>
                <Image 
                source={{ uri: 'http://zmp3-photo-td.zadn.vn/thumb/240_240/avatars/d/1/d122f030d505f3a4f51cc333343e95ee_1499850029.jpg' }}
                style={{ width: 100, height: 100 }}
                />
            </View>
        );
    }
}