import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native';

/*const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];*/

/*const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);*/

class App extends React.Component {
  render() {
    /* const renderItem = ({item}) => <Item title={item.title} />;*/

    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../Image/placeholder.png')}
        />
        <View style={styles.textStyleView}>
          <Text style={styles.textStyle}>У вас пока нет дел.</Text>
        </View>
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
