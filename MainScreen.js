import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Dimensions, 
  SafeAreaView, 
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';

export default class MainScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Ürünler',
})

  constructor() {
    super();
    this.state = {
      totalPrice: 0
    }
  }

  renderOrderButton() {
    return (
      <TouchableOpacity 
        style={{ 
          position: 'absolute', 
          top: 60, 
          right: 40, 
          backgroundColor: this.state.totalPrice !== 0 ? '#1590e8' : '#0003',
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 80,
          flexDirection: 'row',
          alignItems: 'center'
        }} 
        onPress={() => this.state.totalPrice !== 0 ? 
          this.props.navigation.navigate('OrderScreen', { data: this.state.totalPrice}) : {}}
      >
        <Image source={require('./assets/images/baloon.png')} style={{ width: 20, height: 20, marginRight: 6 }} />
        <Text style={{ color: 'white', fontWeight: 'bold' }} >{'Sipariş ver - ' + this.state.totalPrice + ' TL'}</Text>
      </TouchableOpacity>
    )
  }

  renderData() {
    return sampleData.map((data, index) => {
      return (
        <View style={styles.dataContainerView}>
          {this.renderCell(data)}
          {this.renderCell(sampleData2[index])}
        </View>
      )
    }) 
  }

  renderCell(data) {
    return (
      <TouchableOpacity 
        style={styles.cellContainerView} 
        onPress={() => this.setState({ totalPrice: this.state.totalPrice + data.price})} 
      >
        <View style={{ marginBottom: 30 }} >
          <Image 
            source={data.url} 
            style={{ height: 100, width: 100 }}   
          />
        </View>
        <Text>{data.title}</Text>
        <Text style={{ fontWeight: 'bold' }} >{data.price + ' TL'}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={{ flex: 1 }} >
          {this.renderData()}
        </ScrollView>
        {this.renderOrderButton()}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },

  dataContainerView: {
    width: Dimensions.get('window').width,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },  

  cellContainerView: {
    backgroundColor: '#FFF',
    width: (Dimensions.get('window').width / 2) - 26,
    minHeight: 200,

    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 2,
    marginTop: 10,

    borderRadius: 4,
  }
});

const sampleData = [
  {
    'title': 'Dido',
    'price': 1.50,
    'url': require('./assets/images/dido.jpg') 
  },
  {
    'title': 'Lays Baharatlı',
    'price': 4.50,
    'url': require('./assets/images/lays-baharat.jpg')
  },
  {
    'title': 'Lays Normal',
    'price': 4.50,
    'url': require('./assets/images/lays.jpeg')
  },
  {
    'title': 'Lila Pause',
    'price': 3.00,
    'url': require('./assets/images/lilapause.jpg')
  },
]

const sampleData2 = [
  {
    'title': 'Çokoprens',
    'price': 2.00,
    'url': require('./assets/images/cokoprens.jpg')
  },
  {
    'title': 'Starbucks Muz',
    'price': 1.00,
    'url': require('./assets/images/muz.png')
  },
  {
    'title': 'Lila Pause',
    'price': 3.00,
    'url': require('./assets/images/lilapause.jpg')
  },
  {
    'title': 'Brownie',
    'price': 6.25,
    'url': require('./assets/images/brownie.jpg')
  },
]