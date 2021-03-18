import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Header from '../sharedComponents/header';

export default class Corner extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Header navigation={navigation} />
        <View>
          <Text>Corner Screen</Text>
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
