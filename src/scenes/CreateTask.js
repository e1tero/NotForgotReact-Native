import React, {Component} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {BACKGROUND} from '../styles/colors';
import CreateTaskForm from "../components/forms/CreateTaskForm";

export default class CreateTask extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#c56a37" />
                <CreateTaskForm navigation={this.props.navigation} />
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
