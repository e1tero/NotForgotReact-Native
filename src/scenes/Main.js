import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {api} from "../http/API";

const TaskView = ({item}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
    </View>
);

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasInternetConnection: true,
            priorities: [],
            categories: [],
            tasks: []
        }
    }

    componentDidMount = async () => {
        await this.fetchDataAsync();
    }

    fetchDataAsync = async () => {
        await api.GetCategories().then((data) => {
            this.setState({categories: data});
        }).catch((error) => alert(error.toString()));

        await api.GetPriorities().then((data) => {
            this.setState({priorities: data});
        }).catch((error) => alert(error.toString()));

        await api.GetTasks().then((data) => {
            this.setState({tasks: data});
        }).catch((error) => alert(error.toString()));
    }

    render() {
        /* TODO: change placeholder */
        return (
            <View style={styles.container}>
                {
                    this.state.tasks ?
                        this.state.tasks.map((i,j) => {
                            return <TaskView key={j} item={i}/>
                        })
                        :
                        <View>
                            <Image
                                style={styles.image}
                                source={require('../assets/image/placeholder.png')}
                            />
                            <View style={styles.textStyleView}>
                                <Text style={styles.textStyle}>У вас пока нет дел.</Text>
                            </View>
                        </View>
                }
                <TouchableOpacity
                    style={{
                        borderWidth: 1,
                        borderColor: 'rgba(0,0,0,0.2)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 50,
                        height: 50,
                        backgroundColor: '#fff',
                        borderRadius: 50,
                    }}
                    onPress={() => this.props.navigation.navigate('CreateTask')}
                >
                    <Text>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    image: {
        marginBottom: 146,
    },
    textStyleView: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 24,
        color: '#fff',
        fontFamily: 'SF Pro Display',
        marginBottom: 146,
    },
    headerStyle: {
        backgroundColor: '#FF9500',
        justifyContent: 'center',
        height: 118,
        paddingLeft: 22,
    },
});

export default App;
