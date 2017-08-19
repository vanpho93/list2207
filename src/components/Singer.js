import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class Singer extends Component {
    render() {
        const { item } = this.props;
        return (
            <View>
                <Text style={styles.textStyle}>{item.name}</Text>
                <Image 
                    source={{ uri: item.image }} 
                    style={styles.image}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 200, height: 200, margin: 10
    },
    textStyle: {
        fontSize: 20,
        padding: 10
    }
  });