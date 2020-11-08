import React, {Component} from 'react';
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {api} from "../../http/API";
import TaskModel from "../../models/TaskModel";
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';


export default class CreateTaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            deadline: Date.now(),
            done: 0,
            categoryID: null,
            priorityID: null,

            priorities: [],
            categories: [],

            showDatepicker: false,
        };

        this.categoryController;
        this.priorityController;
    }

    componentDidMount = async () => {
        await this.fetchDataAsync();
    }

    fetchDataAsync = async () => {
        await api.GetCategories().then((data) => {
            data = this.addLabels(data);
            this.setState({categories: data});
        }).catch((error) => alert(error.toString()));

        await api.GetPriorities().then((data) => {
            data = this.addLabels(data);
            this.setState({priorities: data});
        }).catch((error) => alert(error.toString()));
    }

    addLabels(data) {
        for (let i = 0; i < data.length; i++) {
            data[i].label = data[i].value = data[i]['name'];
            data[i].icon = () => {
            };
        }

        return data;
    }

    doCreateTaskAsync = async () => {
        if (this.validateField()) {
            let {name, description, done, deadline, categoryID, priorityID} = this.state;
            deadline = parseInt(deadline.getTime() / 1000);
            let task = new TaskModel(name, description, done, deadline, categoryID, priorityID);
            await api.CreateTask(task)
                .then((data) => {
                    this.props.navigation.replace('Main');
                })
                .catch((error) => {
                    alert(error);
                });
        }
    }

    validateField = () => {
        return true;
    }

    onDeadlineChange = (event, selectedDate) => {
        const currentDate = selectedDate || this.state.deadline;
        this.setState({deadline: currentDate, showDatepicker: false});
    };

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
                    Добавить заметку
                </Text>
                <View style={styles.viewWindow}>
                    <TextInput
                        placeholder="Название"
                        placeholderTextColor="#000000"
                        backgroundColor="rgba(51, 51, 51, 0.06)"
                        onChangeText={(value) => this.setState({name: value})}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Описание"
                        placeholderTextColor="#000000"
                        backgroundColor="rgba(51, 51, 51, 0.06)"
                        multiline={true}
                        onChangeText={(value) => this.setState({description: value})}
                        style={styles.input}
                    />
                    <DropDownPicker
                        items={this.state.categories}
                        placeholder={'Категория'}
                        controller={instance => this.categoryController = instance}
                        onChangeList={(categories, callback) => {
                            this.setState({
                                categories // items: items
                            }, callback);
                        }}

                        onChangeItem={item => this.setState({
                            categoryID: item.id
                        })
                        }

                        containerStyle={{height: 40}}
                    />
                    <DropDownPicker
                        items={this.state.priorities}
                        placeholder={'Приоритет'}
                        controller={instance => this.priorityController = instance}
                        onChangeList={(priorities, callback) => {
                            this.setState({
                                priorities // items: items
                            }, callback);
                        }}

                        onChangeItem={item => this.setState({
                            priorityID: item.id
                        })}

                        containerStyle={{height: 40}}
                    />

                    <View>
                        <Button onPress={() => this.setState({showDatepicker: !this.state.showDatepicker})}
                                title="Выбрать время"/>
                    </View>

                    {this.state.showDatepicker && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={this.state.deadline}
                            mode={'date'}
                            is24Hour={true}
                            display="default"
                            onChange={this.onDeadlineChange}
                        />
                    )}

                    <TouchableOpacity
                        style={{
                            marginBottom: 10,
                            backgroundColor: '#FF9500',
                            borderRadius: 8,
                        }}
                        onPress={() => this.doCreateTaskAsync()}>
                        <Text style={styles.textButton}>Сохранить</Text>
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
