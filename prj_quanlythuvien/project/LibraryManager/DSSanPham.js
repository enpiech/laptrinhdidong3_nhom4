import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Book from './Book'

export default class DSSanPham extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center', top: 56 }}>
                <Book
                    productId="SP01"
                    productName="Áo"
                    img="https://facebook.github.io/react-native/img/tiny_logo.png"
                ></Book>
                <Book
                    productId='SP01'
                    productName='Áo'
                    img='https://facebook.github.io/react-native/img/tiny_logo.png'
                ></Book>
                <View style={{ alignItems: 'flex-end' }}>
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => this.props.navigation.navigate('Insert')} >
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#6193ab',
        padding: 15,
        borderRadius: 50,
        height: 50,
        width: 50,
        marginBottom: 20,
        alignSelf: 'flex-end'
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 15
    },
})
