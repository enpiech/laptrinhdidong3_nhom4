import React, { Component } from 'react'
import { Text, View } from 'react-native'
import SanPham from './SanPham'

export default class DSSanPham extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center', top: 56 }}>
                <SanPham 
                    productId = "SP01" 
                    productName = "Áo" 
                    img = "https://facebook.github.io/react-native/img/tiny_logo.png"
                ></SanPham>
                <SanPham 
                    productId = 'SP01' 
                    productName = 'Áo' 
                    img = 'https://facebook.github.io/react-native/img/tiny_logo.png'
                ></SanPham>
            </View>  
        );
    }
}
