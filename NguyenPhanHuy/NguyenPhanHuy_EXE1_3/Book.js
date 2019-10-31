/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image, Alert} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

var icon;

export default class Book extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
        }}>
        <View style={styles.book}>
          <Image
            style={styles.bookImage}
            source={{uri: this.props.bookImage}}
          />
          <View style={styles.containerContent}>
            <Text> Mã sách : {this.props.bookId} </Text>
            <Text> Tên sách : {this.props.bookName} </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  book: {
    flex: 1,
    flexDirection: 'row',
  },

  bookDescription: {
    marginBottom: 5,
    backgroundColor: 'mediumseagreen',
  },

  bookImage: {
    width: 100,
    height: 100,
    margin: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginHorizontal: 15,
    fontSize: 15,
  },
  buttonContainer: {
    backgroundColor: 'red',
    margin: 5,
    justifyContent: 'center',
  },
  containerContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
