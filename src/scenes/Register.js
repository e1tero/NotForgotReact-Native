import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import RegisterForm from '../components/forms/RegisterForm.js';
import {BACKGROUND} from "../styles/colors";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RegisterForm navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
    padding: 40,
  },
});
