import React, {Component, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';

export default class Splash extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.navigation.replace('Login');
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <ImageBackground
          style={styles.image2}
          source={require('../Image/Background.png')}>
          <Image style={styles.image} source={require('../Image/Logo.png')} />
        </ImageBackground>
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
  image: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image2: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
