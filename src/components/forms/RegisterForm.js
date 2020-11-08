import React, {Component} from 'react';
import {StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native';
import {api} from "../../http/API";

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

    validateField = () => {
        const {email, password, name, repeatPassword} = this.state;
        let emailReg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        let passwordReg = /([a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[a-z]+[0-9]+|[A-Z]+[0-9]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+)/;
        if (email === '') {
            alert('Please fill email');
            return false;
        } else if (password === '') {
            alert('Please fill password');
            return false;
        } else if (emailReg.test(email) === false) {
            alert('Incorrect email');
            return false;
        } else if (passwordReg.test(password) === false) {
            alert('Incorrect password');
            return false;
        } else if (name === '') {
            alert('Please fill your name');
            return false;
        } else if (password !== repeatPassword) {
            alert('Passwords don`t match');
            return false;
        }
        return true;
    };

    // TODO: is success, store credentials locally
    doRegisterAsync = async () => {
        if (this.validateField()) {
            const {name, email, password} = this.state;
            await api.RegisterUser(name, email, password)
                .then((data) => {
                    this.props.navigation.navigate('Main');
                })
                .catch((error) => {
                    alert(error);
                });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>

                <View style={styles.viewWindow}>

                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: 28,
                            color: '#FF9500',
                            paddingBottom: 10,
                        }}>
                        Регистрация
                    </Text>

                    <TextInput
                        placeholder=" Имя"
                        backgroundColor="rgba(51, 51, 51, 0.06)"
                        placeholderTextColor="#000000"
                        onChangeText={(value) => this.setState({name: value})}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder=" yourmail"
                        backgroundColor="rgba(51, 51, 51, 0.06)"
                        placeholderTextColor="#000000"
                        onChangeText={(value) => this.setState({email: value})}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder=" Пароль"
                        backgroundColor="rgba(51, 51, 51, 0.06)"
                        placeholderTextColor="#000000"
                        secureTextEntry={true}
                        onChangeText={(value) => this.setState({password: value})}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder=" Повторите пароль"
                        backgroundColor="rgba(51, 51, 51, 0.06)"
                        placeholderTextColor="#000000"
                        secureTextEntry={true}
                        onChangeText={(value) => this.setState({repeatPassword: value})}
                        style={styles.input}
                    />
                    <TouchableOpacity
                        style={{
                            marginBottom: 10,
                            backgroundColor: '#FF9500',
                            borderRadius: 8,
                            marginTop: 10,
                            elevation: 4,
                        }}
                        onPress={() => this.doRegisterAsync()}>
                        <Text style={styles.textButtonReg}>ЗАРЕГИСТРИРОВАТЬСЯ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            marginBottom: 10,
                            backgroundColor: '#D8D8D8',
                            borderRadius: 8,
                            marginTop: 2,
                            elevation: 4,
                        }}
                        onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={styles.textButton}>ВОЙТИ</Text>
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
        marginTop: 100,
        marginBottom: 110,
    },
    input: {
        height: 40,
        marginBottom: 10,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.38)',
    },
    viewWindow: {
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 0,
    },
    textButton: {
        padding: 10,
        textAlign: 'center',
        color: '#484848',
    },
    textButtonReg: {
        padding: 10,
        textAlign: 'center',
        color: '#fff',
    },
});

export default LoginForm;
