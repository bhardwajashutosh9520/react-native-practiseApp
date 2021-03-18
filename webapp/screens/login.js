import React from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from 'react-native';
import {Formik} from 'formik';
// validation
import * as yup from 'yup';

import firebaseDb from '../firebase/firebase'

const validation = yup.object({
  username: yup.string().required().min(2),
  password: yup.string().required().min(2),
});

// reducer actions
import {setLoggedIn} from '../models/user/reducer';

class Login extends React.PureComponent {
  componentDidMount() {
    const {loggedIn, navigation} = this.props;
    if (loggedIn) {
      navigation.navigate('Home');
    }
  }

  submitForm = (values) => {
    const {setLoggedIn, navigation} = this.props;
    const {username, password} = values;
    console.log('submit form====', values, username, password);
    firebaseDb.child('users').push(
      values , 
      err => {
        if(err) {
          console.log("error--" , err)
        }
      }
    )
    if (username === 'ashu' && password === 'ashu') {
      setLoggedIn(true);
      navigation.navigate('Home');
    } else {
      alert('username or password is invalid');
    }
  };

  render() {
    const {navigation} = this.props;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          source={require('../assets/pexels-rachel-claire-6127316.jpeg')}
          style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
          <View style={styles.form}>
            <View>
              <Text style={styles.loginText}>Allo BEIRUT</Text>
            </View>
            <Formik
              initialValues={{username: '', password: ''}}
              onSubmit={(values) => {
                this.submitForm(values);
              }}
              validationSchema={validation}>
              {(actions) => (
                <View style={{width: '100%'}}>
                  <TextInput
                    style={styles.input}
                    placeholder="enter username"
                    onChangeText={actions.handleChange('username')}
                    onBlur={actions.handleBlur('username')}
                    value={this.props.username}
                  />
                  <Text style={styles.error}>
                    {actions.touched.username && actions.errors.username}
                  </Text>
                  <TextInput
                    style={styles.input}
                    title="password"
                    placeholder="enter password"
                    onChangeText={actions.handleChange('password')}
                    onBlur={actions.handleBlur('password')}
                    value={this.props.password}
                  />
                  <Text style={styles.error}>
                    {actions.touched.password && actions.errors.password}
                  </Text>
                  <View style={{marginTop: 5}}>
                    <Button
                      title="submit"
                      onPress={actions.handleSubmit}
                      title="Log In"
                      color="#B22222"
                    />
                  </View>
                  <View style={{marginTop: 5}}>
                    <Button
                      onPress={() => {
                        navigation.navigate('SignUp');
                      }}
                      title="Create new Account"
                      color="green"
                    />
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    padding: 3,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 2,
    marginTop: 5,
    height: 40,
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#B22222',
    marginLeft: 0,
  },
  error: {
    color: 'red',
  },
});

const mapStateToProps = (state) => ({
  loggedIn: state.user.loggedIn,
});
const mapDistpatchToProps = (dispatch) => {
  return {
    setLoggedIn: (payload) => dispatch(setLoggedIn(payload)),
  };
};
export default connect(mapStateToProps, mapDistpatchToProps)(Login);
