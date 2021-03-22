import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class SignUp extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <View>
          <Text>Sign up screen</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
});
