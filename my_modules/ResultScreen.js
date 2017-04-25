import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';
import { styles } from '../my_styles/styles';

export default class ResultScreen extends Component {
  static navigationOptions = {
    title: 'From Node.js with Love'
  };

  constructor(props) {
    super(props);
    const { params } = this.props.navigation.state;

    this.state = {
      name: '' + params.name,
      gender: '' + params.gender,
    };
  }

  // async getData() {
  //   let name = this.state.name;
  //   let gender = this.state.gender;
  //   try {
  //     let data = await retrieveData(name, gender);
  //     this.setState({
  //       data: data
  //     });
  //   } catch(err) {
  //     console.error(err);
  //   }
  // }

  render() {
    return(
      <View style={styles.result_container}>
        <Text>{this.state.name}</Text>
        <Text>{this.state.gender}</Text>
      </View>
    );
  }
}

// async function sendData(name, gender) {
//   let url = 'http://localhost:9000/api/greetings';
//
//   try {
//     let res = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         name: name,
//         gender: gender
//       })
//     });
//     let resJson = await res.json();
//     return resJson;
//   } catch(error) {
//     console.log(error);
//   };
// }

// async function retrieveData(name, gender) {
//   let url = 'http://localhost:9000/api/greetings' + '?name=' + name + '&gender=' + gender;
//   try {
//     let res = await fetch(url);
//     let resJson = res.json();
//     console.log('data: ' + resJson);
//     return resJson;
//   } catch(err) {
//     console.log(err);
//   }
// }
