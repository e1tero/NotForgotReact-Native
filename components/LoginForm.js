import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import * as Alert from 'react-native';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  validate_field = () => {
    const {email, password} = this.state;
    let emailReg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    let passwordReg = /([a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[a-z]+[0-9]+|[A-Z]+[0-9]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+)/;
    if (email == '') {
      alert('Please fill email');
      return false;
    } else if (password == '') {
      alert('Please fill password');
      return false;
    } else if (emailReg.test(email) === false) {
      alert('Incorrect email');
      return false;
    } else if (passwordReg.test(password) === false) {
      alert('Incorrect password');
      return false;
    }
    return true;
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 28,
            color: '#FF9500',
          }}>
          Вход
        </Text>
        <View style={styles.viewWindow}>
          <TextInput
            placeholder="YourMail"
            onChangeText={(value) => this.setState({email: value})}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(value) => this.setState({password: value})}
            style={styles.input}
          />
          <TouchableOpacity
            style={{
              marginBottom: 10,
              backgroundColor: '#FF9500',
              borderRadius: 8,
            }}
            title="Press me"
            onPress={() => this.validate_field()}>
            <Text style={styles.textButton}>Вход</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginBottom: 10,
              backgroundColor: '#979797',
              borderRadius: 8,
            }}
            title="Press me"
            onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={styles.textButton}>Регистрация</Text>
          </TouchableOpacity>
        </View>
        <Text>{'email' + this.state.email}</Text>
        <Text>{'password' + this.state.password}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 3,
    shadowColor: 'black',
    shadowOpacity: 0.9,
    elevation: 10,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 170,
    marginBottom: 170,
  },
  input: {
    height: 40,
    marginBottom: 10,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(60, 60, 67, 0.29)',
  },
  viewWindow: {
    width: '100%',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 0,
  },
  textButton: {
    padding: 10,
    textAlign: 'center',
    color: '#fff',
  },
});

export default LoginForm;
