import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'; // Version can be specified in package.json
import { createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import LoginScreen from "./LoginScreen";
import List from "./FetchExample";
import Insert from "./InsertBook";
import Modify from "./ModifyBook";

const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    List: List,
    Insert: Insert,
    Modify: Modify
  },
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
