import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ToastAndroid,
  Navigator
} from 'react-native';
import { styles } from './my_styles/styles';   // styles
import ResultScreen from './my_modules/ResultScreen';   // ResultScreen
import { StackNavigator } from 'react-navigation';

class SampleDisplay extends Component {
  static navigationOptions = {
    title: 'Welcome'
  };

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      gender: ''
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <TextInput
          placeholder="Enter your name"
          style={styles.textinput}
          onChangeText={(name) => this.setState({name})} />
        <TextInput
          placeholder="Enter your gender"
          style={styles.textinput}
          onChangeText={(gender) => this.setState({gender})} />
        <Button
          title="Submit"
          onPress={() => navigate('Result', {
            name: this.state.name,
            gender: this.state.gender
          })} />
      </View>
    );
  }
}

const SampleApp = StackNavigator({
  Home: { screen: SampleDisplay },
  Result: { screen: ResultScreen },
});

AppRegistry.registerComponent('SampleApp', () => SampleApp);
