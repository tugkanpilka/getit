import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';


export default class SuccessScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft: null,
        title: 'Teşekkürler!',
        headerBackTitle: ' ',
    })

    render() {
        return (
            <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Teşekkürler, siparişinizi aldık!</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('MainScreen')}>
                    <Text style={{ marginVertical: 10, color: 'blue' }} >Ürünlere dön</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}