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
      repeatPassword: '',
      name: '',
    };
  }

  validate_field = () => {
    const {email, password, name, repeatPassword} = this.state;
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
    } else if (name == '') {
      alert('Please fill your name');
      return false;
    } else if (password != repeatPassword) {
      alert('Passwords don`t match');
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
          Регистрация
        </Text>
        <View style={styles.viewWindow}>
          <TextInput
            placeholder="YourName"
            onChangeText={(value) => this.setState({name: value})}
            style={styles.input}
          />
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
          <TextInput
            placeholder="Repeat password"
            secureTextEntry={true}
            onChangeText={(value) => this.setState({repeatPassword: value})}
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
            <Text style={styles.textButton}>Зарегистрироваться</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginBottom: 10,
              backgroundColor: '#979797',
              borderRadius: 8,
            }}
            title="Press me"
            onPress={() => this.props.navigation.navigate('Main')}>
            <Text style={styles.textButton}>Войти</Text>
          </TouchableOpacity>
        </View>
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
    marginTop: 130,
    marginBottom: 130,
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
