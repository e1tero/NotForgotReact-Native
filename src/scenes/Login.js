import React, {Component} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import LoginForm from '../components/forms/LoginForm';
import {BACKGROUND} from '../styles/colors';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <LoginForm navigation={this.props.navigation} />
        <StatusBar backgroundColor="#c56a37" />
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
