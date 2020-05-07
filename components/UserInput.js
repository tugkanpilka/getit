import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput
} from 'react-native';


export default class UserInput extends React.Component {

  render() {
    return (
      <TextInput 
        style={styles.phoneNumberTextInput} 
        underlineColorAndroid={'#D2D2D2'}
        placeholder={this.props.placeholder}
        placeholderTextColor={'#D2D2D2'}
        selectionColor={'#276EF1'}
        onChangeText={(value) => this.props.onChangeText(value)}
        value={this.props.value}
      />
    )
  }
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  phoneNumberTextInput: {
    fontSize: 18,
    color: '#000',
    marginVertical: 4,
    backgroundColor: '#0001',
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderRadius: 8,
  }
})