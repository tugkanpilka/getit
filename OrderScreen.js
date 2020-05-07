import React from 'react';
import { ScrollView, SafeAreaView, View, Text, StyleSheet, Dimensions, Platform, KeyboardAvoidingView } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import UserInput from './components/UserInput';
import ContinueButton from './components/ContinueButton';

export default class OrderScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Sipariş ver',
        headerBackTitle: 'Ürünler',
    })

    constructor() {
        super();
        this.state = {
            name: null,
            surname: null,
            address: null,
            
            switch: null,
            totalPrice: null
        }
    }

    renderTitle() {
        return (
            <View style={styles.titleContainer}>
                <Text>Toplam tutar:</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 34, color: '#1590e8' }}>{this.props.navigation.getParam('data') + ' TL'} </Text>
            </View>
        )
    }

    renderInputs() {
        const { name, surname, address } = this.state;

        return (
            <View style={styles.inputContainer}>
                <UserInput 
                    placeholder={'Adınız'} 
                    onChangeText={(value) => this.setState({ name: value})} 
                    value={this.state.name}    
                />
                <UserInput 
                    placeholder={'Soyadınız'} 
                    onChangeText={(value) => this.setState({ surname: value})} 
                    value={this.state.surname}    
                />
                <UserInput 
                    placeholder={'Adresiniz'} 
                    onChangeText={(value) => this.setState({ address: value})} 
                    value={this.state.address}    
                />
                {this.renderSwitch()}
                <ContinueButton 
                    isReady={name && surname && address} text={'Sipariş ver'} 
                    onPress={() => name && surname && address ? this.props.navigation.navigate('SuccessScreen'): {}}
                />
            </View>
        )
    }

    renderSwitch() {
        var radio_props = [
            {label: 'Nakit', value: 0 },
            {label: 'Kredi kartı ile kapıda ödeme', value: 1 }
        ];

        return (
            <View style={{ marginVertical: 20 }} >
                <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    onPress={(value) => {this.setState({switch:value})}}
                />
            </View>
        )
    }

    render() {
        return (
            <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
          >
            <ScrollView style={{ flex: 1 }} >

            <SafeAreaView style={styles.container}>
                {this.renderTitle()}
                {this.renderInputs()}
            </SafeAreaView>
            </ScrollView>
          </KeyboardAvoidingView>
        )
    }
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },

    titleContainer: {
        width: screenWidth - 40,
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#FFF',
        alignSelf: 'center',
        borderRadius: 4,
        marginTop: 24
    },

    inputContainer: {
        width: screenWidth - 40,
        paddingVertical: 20,
        paddingHorizontal: 24,
        backgroundColor: '#FFF',
        alignSelf: 'center',
        borderRadius: 4,
        marginTop: 24
    }
})