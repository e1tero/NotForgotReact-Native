import React from 'react';
import 'react-native-gesture-handler';

import {View, Text, TouchableOpacity} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from './components/Splash';
import Login from './components/Login';
import Register from './components/Register';
import Main from './components/Main';

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
            options={{
              title: 'NOT FORGOT!',
              headerStyle: {
                backgroundColor: '#FF9500',
                height: 100,
              },
              headerTitleContainerStyle: {
                paddingTop: 70,
              },
              headerLeft: null,
              headerTintColor: '#fff',
              headerTitleStyle: {
                textAlignVertical: 'bottom',
              },
              headerRight: () => (
                <TouchableOpacity onPress={() => console.log(1)}>
                  <Text style={{fontSize: 28, color: 'white'}}>+</Text>
                </TouchableOpacity>
              ),
              headerRightContainerStyle: {
                padding: 20,
              },
            }}
            component={Main}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
