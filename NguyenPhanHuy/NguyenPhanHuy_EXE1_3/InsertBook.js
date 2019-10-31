import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  TextInput,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

export default class InsertBook extends React.Component {
  constructor() {
    super();

    this.state = {
      bookId: '',
      bookName: '',

      bookAmount: 1,

      ActivityIndicator_Loading: false,
    };
  }

  Insert_Data_Into_MySQL = () => {
    const {navigation} = this.props;
    this.setState({ActivityIndicator_Loading: true}, () => {
      fetch('http://10.0.2.2:8080/webservice/Insert_SanPham.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bookId: this.state.bookId,
          bookName: this.state.bookName,
          bookAmount: this.state.bookAmount,
        }),
      })
        .then(response => response.json())
        .then(responseJsonFromServer => {
          alert(responseJsonFromServer);

          this.setState({ActivityIndicator_Loading: false});
          this.props.navigation.goBack();
        })
        .catch(error => {
          console.error(error);

          this.setState({ActivityIndicator_Loading: false});
        });
    });
  };

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.MainContainer}>
        <TextInput
          placeholder="Nhập mã sách"
          style={styles.TextInputStyleClass}
          underlineColorAndroid="transparent"
          onChangeText={TextInputText => this.setState({bookId: TextInputText})}
        />

        <TextInput
          placeholder="Nhập tên sách"
          style={styles.TextInputStyleClass}
          underlineColorAndroid="transparent"
          onChangeText={TextInputText =>
            this.setState({bookName: TextInputText})
          }
        />

        <TextInput
          keyboardType="number-pad"
          placeholder="Nhập số lượng"
          style={styles.TextInputStyleClass}
          underlineColorAndroid="transparent"
          onChangeText={TextInputText =>
            this.setState({bookAmount: TextInputText})
          }
        />

        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.TouchableOpacityStyle}
          onPress={this.Insert_Data_Into_MySQL}>
          <Text style={styles.TextStyle}>Thêm sách</Text>
        </TouchableOpacity>

        {this.state.ActivityIndicator_Loading ? (
          <ActivityIndicator
            color="#009688"
            size="large"
            style={styles.ActivityIndicatorStyle}
          />
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },

  TextInputStyleClass: {
    textAlign: 'center',
    height: 40,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#009688',
    borderRadius: 7,
    marginBottom: 10,
    width: '95%',
  },

  TouchableOpacityStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#009688',
    marginBottom: 20,
    width: '90%',
  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },

  ActivityIndicatorStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
