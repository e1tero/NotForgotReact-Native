import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <LoginForm navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF9500',
    padding: 40,
  },
});
