import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/home';
import Login from '../screens/login';
import SignUp from '../screens/signup';
import Detail from '../screens/detail';
import Menu from '../screens/menu';
import Favorites from '../screens/favorites';
import Corner from '../screens/corners';
import Order from '../screens/order';
import Starts from '../screens/starts';
import Branches from '../screens/branches';
import Notification from '../screens/notification';
import ContactUs from '../screens/contactUs';
import MyCart from '../screens/cart';

import CustomDrawerContent from './customDrawer';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const login = (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    {login}
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

const user = (
  <Drawer.Navigator
    drawerType={'front'}
    drawerStyle={{width: '100%'}}
    drawerContent={(props) => <CustomDrawerContent {...props} />}>
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Details" component={Detail} />
    <Drawer.Screen
      name="Menu"
      component={Menu}
      options={{
        headerShown: false,
      }}
    />
    <Drawer.Screen
      name="Favorites"
      component={Favorites}
      options={{
        headerShown: false,
      }}
    />
    <Drawer.Screen
      name="Corner"
      component={Corner}
      options={{
        headerShown: false,
      }}
    />
    <Drawer.Screen
      name="Order"
      component={Order}
      options={{
        headerShown: false,
      }}
    />
    <Drawer.Screen
      name="Starts"
      component={Starts}
      options={{
        headerShown: false,
      }}
    />
    <Drawer.Screen
      name="Branches"
      component={Branches}
      options={{
        headerShown: false,
      }}
    />
    <Drawer.Screen
      name="Notification"
      component={Notification}
      options={{
        headerShown: false,
      }}
    />
    <Drawer.Screen
      name="ContactUs"
      component={ContactUs}
      options={{
        headerShown: false,
      }}
    />
    <Drawer.Screen
      name="Cart"
      component={MyCart}
      options={{
        headerShown: false,
      }}
    />
  </Drawer.Navigator>
);

class CustomScreen extends React.PureComponent {
  render() {
    const {loggedIn} = this.props;
    return <NavigationContainer>{loggedIn ? user : login}</NavigationContainer>;
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

const mapStateToProps = (state) => ({
  loggedIn: state.user.loggedIn,
});
export default connect(mapStateToProps, null)(CustomScreen);
