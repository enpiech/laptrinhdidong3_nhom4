import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Text,
  View,
  Alert,
} from 'react-native';
import Book from './Book';

export default class FetchExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  state = {
    search: '',
    typing: false,
    typingTimeout: 0,
  };

  componentDidMount() {
    //Here is the Trick
    const {navigation} = this.props;
    //Adding an event listner om focus
    //So whenever the screen will have focus it will set the state to zero
    this.focusListener = navigation.addListener('didFocus', () => {
      fetch('http://10.0.2.2:8080/webservice/Select_SanPham.php')
        .then(response => response.json())
        .then(responseJson => {
          this.setState(
            {
              isLoading: false,
              dataSource: responseJson,
            },
            function() {},
          );
        })
        .catch(error => {
          console.error(error);
        });
    });
  }

  componentWillUnmount() {
    // Remove the event listener before removing the screen from the stack
    this.focusListener.remove();
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Modify', {
                  bookId: item.bookId,
                  bookName: item.bookName,
                  bookAmount: item.bookAmount,
                })
              }>
              <Book
                bookId={item.bookId}
                bookName={item.bookName}
                bookImage={item.bookImage}
              />
            </TouchableOpacity>
          )}
        />
        <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate('Insert')}>
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
    marginEnd: 20,
    alignSelf: 'flex-end',
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
