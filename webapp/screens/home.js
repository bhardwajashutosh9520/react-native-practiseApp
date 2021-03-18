import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, ScrollView, View, Button, Image} from 'react-native';
import Header from '../sharedComponents/header';
// import actions from reducer.
import {setCartData, setFoodItems , getFoodList} from '../models/user/reducer';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  componentDidMount() {
    const {setFoodItems} = this.props;
    setFoodItems();
  }

  addToOrder = (data) => {
    const {setCartData, cartData} = this.props;
    const newData = [];
    newData.push(data);
    if (cartData) {
      cartData.forEach((item) => {
        newData.push(item);
      });
    }
    setCartData(newData);
    alert('Add in the cart');
  };

  render() {
    const {navigation, foodItems} = this.props;
    let showList;

    if (foodItems) {
      showList = foodItems.map((item, i) => {
        const image = require('../assets/sahiPanir.jpeg');
        return (
          <View style={styles.card} key={item.name}>
            <Image source={image} style={{width: '100%', height: 200}} />
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
                  onPress={() => this.addToOrder(item)}
                  title="ADD TO ORDER"
                  color="#B22222"
                />
              </View>
            </View>
          </View>
        );
      });
    }
    return (
      <View>
        <Header navigation={navigation} />
        <ScrollView style={{marginBottom: 70}}>{showList}</ScrollView>
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
    height: 25,
    marginTop: 2,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  foodItems: state.user.foodItems,
  loggedIn: state.user.loggedIn,
});
const mapDistpatchToProps = (dispatch) => {
  return {
    setCartData: (payload) => dispatch(setCartData(payload)),
    setFoodItems: (payload) => dispatch(setFoodItems(payload)),
    getFoodList : () => dispatch(getFoodList())
  };
};
export default connect(mapStateToProps, mapDistpatchToProps)(Home);
