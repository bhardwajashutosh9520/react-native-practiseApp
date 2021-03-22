import React from 'react';
import {StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './store';
import CustomScreen from './sharedComponents/customScreen';

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <CustomScreen />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  content: {
    color: 'red',
  },
});

export default App;
