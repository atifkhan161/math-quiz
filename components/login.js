import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';

export default class Login extends React.Component {
  constructor(){
    super();
    this.state={
      emailId : '',
      password: ''
    }
  }

  login=(username,password)=>{
    if (username && password){
      if (username === 'admin' && password === 'admin') {
        Alert.alert('Authenticated');
        this.props.navigation.navigate('Home');
      } else {
        Alert.alert('Invalid credentials');
      }
    }
    else{
      Alert.alert('Enter email and password');     
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.containerBox}>
        <View>
          <Image
            source={require('../assets/snack-icon.png')}
            style={styles.box}
          />
          <Text style={styles.textCenter}>LogIn</Text>
        </View>
        <View>
          <TextInput
            style={styles.loginBox}
            placeholder="abc@example.com"
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({
                emailId: text,
              });
            }}
          />

          <TextInput
            style={styles.loginBox}
            secureTextEntry={true}
            placeholder="enter Password"
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              this.login(this.state.emailId, this.state.password);
            }}>
            <Text style={{ textAlign: 'center' }}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  box: { width: 200, height: 200 },
  textCenter: { textAlign: 'center',fontSize: 30},
  containerBox: {
    alignItems: 'center',
    marginTop: 20
  },
  loginBox: {
    width: 300,
    height: 40,
    borderWidth: 1.5,
    fontSize: 20,
    margin: 10,
    paddingLeft: 10,
  },
  loginButton: {
    height: 30,
    width: 90,
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 20,
    paddingTop: 5,
    borderRadius: 7,
  },
});
