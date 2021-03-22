import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../screens/home';
import Detail from '../screens/detail';
// import Menu from './screens/menu';
// import Favorites from './screens/favorites';
// import Corner from './screens/corners';
// import Order from './screens/order';
// import Starts from './screens/starts';
// import Branches from './screens/branches';
// import Notification from './screens/notification';
// import ContactUs from './screens/contactUs';
// import MyCart from './screens/cart';

const Drawer = createDrawerNavigator();

export default function DrawerScreen({navigation}) {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
