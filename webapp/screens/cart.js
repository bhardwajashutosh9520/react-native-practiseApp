import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, ScrollView, View, Image, Button} from 'react-native';
import Header from '../sharedComponents/header';

// import actions from reducer.
import {setCartData} from '../models/user/reducer';

class MyCart extends React.Component {
  removeItem = (id) => {
    const {cartData, setCartData} = this.props;
    const newData = [];
    cartData.forEach((item) => {
      if (item.id !== id) {
        newData.push(item);
      }
    });
    setCartData(newData);
    alert('remove item');
  };

  render() {
    const {navigation, cartData} = this.props;
    let showList;
    if (cartData) {
      showList = cartData.map((item) => {
        return (
          <View style={styles.card} key={item.name}>
            <Image
              source={require(`../assets/ressole.jpeg`)}
              style={{width: '100%', height: 200}}
            />
            <View style={styles.contentArea}>
              <View style={styles.innerCard}>
                <Text style={styles.dishName}>{item.name}</Text>
                <Text style={styles.quantity}>{item.quant}</Text>
              </View>
              <Text>{item.desc}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  marginTop: 5,
                  marginBottom: 10,
                }}>
                <Button
                  onPress={() => this.removeItem(item.id)}
                  title="REMOVE ITEM"
                  color="#B22222"
                  accessibilityLabel="Learn more about this purple button"
                />
              </View>
            </View>
          </View>
        );
      });
    }

    return (
      <View>
        <Header navigation={navigation} name="My Cart" />
        <ScrollView style={{marginBottom: 50}}>{showList}</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderBottomColor: '#B22222',
    borderBottomWidth: 4,
    backgroundColor: '#fff',
  },
  contentArea: {
    padding: 5,
  },
  innerCard: {
    width: '100%',
    height: 40,
    marginTop: 15,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dishName: {
    color: '#B22222',
    fontWeight: 'bold',
    fontSize: 16,
  },
  quantity: {
    color: '#B22222',
    fontWeight: 'bold',
  },
});

const mapStateToProps = (state) => ({
  cartData: state.user.cartData,
});
const mapDistpatchToProps = (dispatch) => {
  return {
    setCartData: (payload) => dispatch(setCartData(payload)),
  };
};
export default connect(mapStateToProps, mapDistpatchToProps)(MyCart);
