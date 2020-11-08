import React from 'react';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from './scenes/Splash';
import Login from './scenes/Login';
import Register from './scenes/Register';
import Main from './scenes/Main';
import CreateTask from "./scenes/CreateTask";

const Stack = createStackNavigator();

class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Splash"
                        options={{headerShown: false}}
                        component={Splash}
                    />
                    <Stack.Screen
                        options={{headerShown: false}}
                        name="Login"
                        component={Login}
                    />
                    <Stack.Screen
                        name="Register"
                        options={{headerShown: false}}
                        component={Register}
                    />
                    <Stack.Screen
                        name="Main"
                        component={Main}
                    />
                    <Stack.Screen
                        name="CreateTask"
                        options={{headerShown: false}}
                        component={CreateTask}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default App;
