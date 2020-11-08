import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native';
import {api} from "../../http/API";


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    validateField = () => {
        const {email, password} = this.state;
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
        }
        return true;
    };

    // TODO: is success, store credentials locally
    doLoginAsync = async () => {
        if (this.validateField()) {
            const {email, password} = this.state;
            await api.LoginUser(email, password)
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
                <Text
                    style={{
                        textAlign: 'center',
                        paddingBottom: 11,
                        fontSize: 28,
                        color: '#F2732A',
                    }}>
                    Вход
                </Text>
                <View style={styles.viewWindow}>
                    <TextInput
                        placeholder="  yourmail"
                        placeholderTextColor="#000000"
                        backgroundColor="rgba(51, 51, 51, 0.06)"
                        onChangeText={(value) => this.setState({email: value})}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="  password"
                        placeholderTextColor="#000000"
                        backgroundColor="rgba(51, 51, 51, 0.06)"
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
                        onPress={() => this.doLoginAsync()}>
                        <Text style={styles.textButton}>ВХОД</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            marginBottom: 10,
                            backgroundColor: '#D8D8D8',
                            borderRadius: 8,
                        }}
                        onPress={() => this.props.navigation.navigate('Register')}>
                        <Text style={styles.textButtonReg}>РЕГИСТРАЦИЯ</Text>
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
        marginTop: 150,
        marginBottom: 200,
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
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 0,
    },
    textButton: {
        padding: 10,
        fontFamily: 'Roboto',
        textAlign: 'center',
        color: '#fff',
    },
    textButtonReg: {
        padding: 10,
        fontFamily: 'Roboto',
        textAlign: 'center',
        color: '#484848',
    },
});

export default LoginForm;
