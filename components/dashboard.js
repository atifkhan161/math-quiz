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
import { Card, ListItem, Button, Icon } from 'react-native-elements';

export default class Dashboard extends React.Component {
  constructor(){
    super();
    this.state={
    }
  }

  render() {
    return (
    
      <KeyboardAvoidingView style={styles.containerBox}>
        <View>
          <Text style={styles.textCenter}>Select Quiz</Text>
        </View>
        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('NaturalQuiz');
        }}>
        <Card>
          <Card.Title>Natural number</Card.Title>
          <Card.Divider/>
           <View style={styles.user}>
            <Image
              style={styles.box}
              resizeMode="cover"
              source={require('../assets/natural_number.png')}
            />
          </View>
        </Card>
       </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('WholeQuiz');
        }}>
          <Card>
            <Card.Title>Whole Number</Card.Title>
            <Card.Divider/>
            <View style={styles.user}>
              <Image
                style={styles.box}
                resizeMode="cover"
                source={require('../assets/whole_num.png')}
              />
            </View>
          </Card>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
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
