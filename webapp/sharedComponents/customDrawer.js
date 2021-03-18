import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import Header from './header';
import {DrawerContentScrollView} from '@react-navigation/drawer';
// reducer actions
import {setLoggedIn} from '../models/user/reducer';

class CustomDrawerContent extends PureComponent {
  signout = () => {
    const {navigation, setLoggedIn} = this.props;
    // setLoggedIn(false);
    navigation.navigate('Login');
  };

  render() {
    const {menuList, navigation, setLoggedIn, loggedIn} = this.props;
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
      <View style={{flex: 1}}>
        <Header navigation={navigation} />
        <DrawerContentScrollView
          contentContainerStyle={{
            paddingTop: 0,
          }}
          {...this.props}>
          {showMenu}
          {loggedIn && (
            <TouchableOpacity
              key="signout"
              style={styles.menuStyle}
              onPress={this.signout}>
              <Icon name="logout" color="#fff" />
              <Text style={styles.menuText}>Sign Out</Text>
            </TouchableOpacity>
          )}
        </DrawerContentScrollView>
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
  loggedIn: state.user.loggedIn,
});

const mapDistpatchToProps = (dispatch) => {
  return {
    setLoggedIn: (payload) => dispatch(setLoggedIn(payload)),
  };
};
export default connect(
  mapStateToProps,
  mapDistpatchToProps,
)(CustomDrawerContent);
