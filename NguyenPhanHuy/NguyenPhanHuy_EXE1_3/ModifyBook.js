import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  TextInput,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default class ModifyBook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookId: props.navigation.getParam('bookId', 'NO-ID'),
      bookName: props.navigation.getParam('bookName', 'NO-NAME'),

      bookAmount: props.navigation.getParam('bookAmount', 1),

      ActivityIndicator_Loading: false,
    };
  }

  Update_Data_In_MySQL = () => {
    this.setState({ActivityIndicator_Loading: true}, () => {
      fetch('http://10.0.2.2:8080/webservice/Modify_SanPham.php', {
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
        })
        .catch(error => {
          console.error(error);

          this.setState({ActivityIndicator_Loading: false});
        });
    });
  };

  DELETE_Data_In_MySQL = () => {
    Alert.alert(
      'Alert',
      'Are you sure you want to delete?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel pressed'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            fetch('http://10.0.2.2:8080/webservice/Delete_SanPham.php', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                bookId: this.state.bookId,
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
              });
          },
        },
      ],
      {cancelable: true},
    );
  };

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.MainContainer}>
        <Text style={{marginBottom: 10}}>Mã sách : {this.state.bookId}</Text>

        <TextInput
          placeholder={this.props.navigation.getParam('bookName', 'NO-NAME')}
          style={styles.TextInputStyleClass}
          underlineColorAndroid="transparent"
          onChangeText={TextInputText => {
            this.setState({bookName: TextInputText});
          }}
        />

        <TextInput
          keyboardType="number-pad"
          placeholder={this.props.navigation.getParam('bookAmount', 1)}
          style={styles.TextInputStyleClass}
          underlineColorAndroid="transparent"
          onChangeText={TextInputText =>
            this.setState({bookAmount: TextInputText})
          }
        />

        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.UpdateButtonStyle}
          onPress={this.Update_Data_In_MySQL}>
          <Text style={styles.TextStyle}>Cập nhật</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.DeleteButtonStyle}
          onPress={this.DELETE_Data_In_MySQL}>
          <Text style={styles.TextStyle}>Delete</Text>
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

  UpdateButtonStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#009688',
    marginBottom: 20,
    width: '90%',
  },

  DeleteButtonStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'red',
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
