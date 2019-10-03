import React, { Component } from 'react';
import { 
    TouchableOpacity,
    Button,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

var icon;

const styles = StyleSheet.create({
    product: {
        justifyContent: 'center',
        backgroundColor: 'lightgray',
        width: 380,
        height: 100,
        marginBottom: 10
    },
    productText: { marginBottom: 5 },
    img: {
        marginTop: -24,
        width: 48,
        height: 48
    },
    containerImg: {
        width: 128,
        height: 152,
        marginLeft: 12,
    },
    containerContent: {
        marginTop: -152,
        marginLeft: 80
    },
    amount: {
        marginLeft: 24
    },
    amountText: {
        fontSize: 12
    },
    decreaseAmount: {
        backgroundColor: 'white',
        textAlign: 'center',
        borderRadius: 4
    },
    increaseAmount: {
        backgroundColor: 'white',
        textAlign: 'center',
        borderRadius: 4
    }
})

export default class SanPham extends Component {
    constructor(props) {
        super(props)
        this.state={
            amount : 1
        }
    }

    increaseAmount() {
        this.setState({
            amount: this.state.amount + 1
        });
    }

    decreaseAmount() {
        this.setState({
            amount: this.state.amount - 1
        });
    }

    render() {
        return(
            <View style={ styles.product }>
                <View style={ styles.containerImg }>
                    <View>
                        <Image style={ styles.img } source={{uri:this.props.img}} />
                    </View>
                    <View>
                        <Text style={ styles.amountText }>Số lượng: { this.state.amount } </Text>
                    </View>
                    <View style={ { width: 24, height: 24 }}>
                        <TouchableOpacity onPress={ ()=> this.increaseAmount() }>
                            <Text style={ styles.increaseAmount }>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={ { width: 24, height: 24, marginLeft: 36, marginTop: -24 }}>
                        <TouchableOpacity onPress={ ()=> this.decreaseAmount() }>
                            <Text style={ styles.decreaseAmount }>-</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={ styles.containerContent }>
                    <Text> Mã sản phẩm: { this.props.productId }</Text>
                    <Text> Tên sản phẩm: { this.props.productName }</Text>
                </View>
            </View>
        );
    }
}