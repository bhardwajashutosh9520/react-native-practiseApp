import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Header from '../sharedComponents/header';
import {Icon} from 'react-native-elements';
import {connect} from 'react-redux';

class Detail extends React.Component {
  render() {
    const {navigation, user, menuList} = this.props;

    let showMenu;
    if (menuList) {
      showMenu = menuList.map((item) => {
        return (
          <TouchableOpacity
            key={item.key}
            style={styles.menuStyle}
            onPress={() => navigation.navigate(item.screen)}>
            <Icon name={item.icon} color="#fff" />
            <Text style={styles.menuText}>{item.name}</Text>
          </TouchableOpacity>
        );
      });
    }

    return (
      <View>
        <Header navigation={navigation} />
        <View>{showMenu}</View>
        <Text>{user.id}</Text>
        <Text>{user.name}</Text>
        <Text onPress={this.props.getList}>Touch this</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menuStyle: {
    backgroundColor: '#B22222',
    width: '100%',
    height: 60,
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    marginLeft: 3,
  },
});

const mapStateToProps = (state) => ({
  user: state.user,
  menuList: state.user.menuList,
});

const mapDistpatchToProps = (dispatch) => {
  return {
    getList: () =>
      dispatch({type: 'GET_LIST', payload: {id: 409, name: 'Amit'}}),
  };
};
export default connect(mapStateToProps, mapDistpatchToProps)(Detail);
