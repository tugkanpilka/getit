import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';


export default class ContinueButton extends React.Component {

  render() {
    const props = this.props;
    return (
      <TouchableOpacity 
        style={[styles.container, { backgroundColor: props.isReady ? '#276EF1' : '#D2D2D2' }]} 
        onPress={() => this.props.onPress()}
      >
        <Text style={styles.buttonText} >{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: 8,
    borderRadius: 8
  },

  buttonText: {
    color: '#000',
    fontWeight: 'bold'
  }
})