import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Icon as MenuIcon, Header} from 'react-native-elements';
import Icon from 'react-native-ico-shopping';
import {loadList} from '../models/user/reducer';

class MyHeader extends React.Component {
  componentDidMount() {
    const {getList, loggedIn} = this.props;
    let data;
    if (!loggedIn) {
      data = [{key: 'login', name: 'Sign In', icon: 'login', screen: 'Login'}];
    } else {
      data = [
        {key: 'home', name: 'Home', icon: 'home', screen: 'Home'},
        {key: 'menu', name: 'Our Menu', icon: 'menu', screen: 'Menu'},
        {
          key: 'favorites',
          name: 'Favorites',
          icon: 'favorite',
          screen: 'Favorites',
        },
        {
          key: 'corners',
          name: 'Loyalty Corners',
          icon: 'home',
          screen: 'Corner',
        },
        {key: 'order', name: 'My order', icon: 'home', screen: 'Order'},
        {
          key: 'starts',
          name: 'Boost your Starts',
          icon: 'star',
          screen: 'Starts',
        },
        {
          key: 'branches',
          name: 'Our Branches',
          icon: 'map',
          screen: 'Branches',
        },
        {
          key: 'notification',
          name: 'Notification',
          icon: 'home',
          screen: 'Notification',
        },
        {
          key: 'contact',
          name: 'Contact Us',
          icon: 'phone',
          screen: 'ContactUs',
        },
      ];
    }
    getList(data);
  }

  goToCart = () => {
    const {navigation} = this.props;
    navigation.navigate('Cart');
  };

  render() {
    const {cartData, name, navigation} = this.props;
    return (
      <View>
        <Header
          backgroundColor="#B22222"
          height={70}
          placement="left"
          leftComponent={
            <View style={styles.leftSide}>
              <MenuIcon
                name="menu"
                color="#B22222"
                onPress={() => {
                  navigation.openDrawer();
                }}
              />
              <Text style={styles.headerText}>Allo BEIRUT</Text>
            </View>
          }
          rightComponent={
            <TouchableOpacity
              onPress={this.goToCart}
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <Icon
                name="shopping-cart"
                badge={cartData.length}
                width={40}
                height={30}
                color="#B22222"
              />
            </TouchableOpacity>
          }
          containerStyle={{
            backgroundColor: 'white',
            justifyContent: 'space-around',
          }}
        />
      </View>
      // <View style={styles.header}>
      //   <View style={styles.menu}>
      // <TouchableOpacity onPress={this.goToDetail}>
      //   <MenuIcon name="menu" color="#B22222" />
      // </TouchableOpacity>
      // <Text style={styles.headerText}>Allo BEIRUT</Text>
      //   </View>
      // <TouchableOpacity
      //   onPress={this.goToCart}
      //   style={{
      //     flexDirection: 'row',
      //     justifyContent: 'flex-end',
      //     alignItems: 'center',
      //   }}>
      //   <Icon
      //     name="shopping-cart"
      //     badge={cartData.length}
      //     width={60}
      //     height={30}
      //     color="#B22222"
      //   />
      // </TouchableOpacity>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#B22222',
    marginLeft: 0,
    fontFamily: 'Fira Sans',
  },
  header: {
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    padding: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => ({
  cartData: state.user.cartData,
  loggedIn: state.user.loggedIn,
});
const mapDistpatchToProps = (dispatch) => {
  return {
    getList: (payload) => dispatch(loadList(payload)),
  };
};
export default connect(mapStateToProps, mapDistpatchToProps)(MyHeader);
