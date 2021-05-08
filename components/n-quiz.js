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

export default class NaturalQuiz extends React.Component {
  constructor(){
    super();
    var dataSet=[
      {
        question: "Smallest Natural number is?",
        answers: [
          "1",
          "2",
          "3",
          "4"
        ],
        correct: 0
      },
      {
        question: "Successor of 99 is?",
        answers: [
          "99",
          "100",
          "98",
          "None"
        ],
        correct: 1
      }
    ];
    this.state = {current:0, dataSet: dataSet, correct:0, incorrect:0};
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(choice) {
    if (choice == this.state.dataSet[this.state.current].correct) {
      this.setState({correct: this.state.correct + 1})
    } else {
      this.setState({incorrect: this.state.incorrect + 1})
    }

    if (this.state.current == this.state.dataSet.length-1) {
      this.setState({current: 0})
      this.setState({incorrect: 0})
      this.setState({correct: 0})
    } else {
      this.setState({current: this.state.current + 1}) 
    }
  }
  render() {
    return(
      <View>
        <Card>
          <ScoreArea correct={this.state.correct} incorrect={this.state.incorrect} />
        </Card>
        <QuizArea handleClick={this.handleClick} dataSet={this.state.dataSet[this.state.current]} />
      </View>
    )
  }
}

function Question(props) {
  var style = {
    color: "red",
  }
  return (
    <Card.Title>
      {props.dataSet.question}
    </Card.Title>
  )
}

function Answer(props) {
  var style = {
    width: "100px",
    height: 50,
    color: "blue"
  }
  return(
    <View>
    <TouchableOpacity
      style={styles.loginButton}
      onPress={() => {
        props.handleClick(props.choice);
      }}>
      <Text style={{ textAlign: 'center' }}>{props.answer}</Text>
    </TouchableOpacity>
    </View>
  )
}

function AnswerList(props) {
  var answers = []
  for (let i = 0; i < props.dataSet.answers.length; i++) {
    answers.push(<Answer choice={i} handleClick={props.handleClick} answer={props.dataSet.answers[i]} />)
  }
  return(
    <View>
      {answers}
    </View>
  )
}

function QuizArea(props) {
  var style = {
    width: "25%",
    display: "block",
    textAlign: "center",
    boxSizing: "border-box",
    float: "left",
    padding: "0 2em"
  }
  return(
    <Card style={style}>
      <Question dataSet={props.dataSet} />
      <Card.Divider/>
      <AnswerList dataSet={props.dataSet} handleClick={props.handleClick} />
    </Card>
  )
}

function TotalCorrect(props) {
    var style = {
    display: "inline-block",
    padding: "1em",
    background: "#eee",
    margin: "0 1em 0 0"
  }
  return(
    <View style={style}><Text>Correct: {props.correct}</Text></View>
  )
}

function TotalIncorrect(props) {
  var style = {
    display: "inline-block",    
    padding: "1em",
    background: "#eee",
    margin: "0 0 0 1em"
  }
  return(
    <View style={style}><Text>Incorrect: {props.incorrect}</Text></View>
  )
}

function ScoreArea(props) {
  var style = {
    width: "100%",
    display: "block",
    textAlign: "left",
    float: "left",
    padding: "2em"
  }
  return(
    <View style={style} >
      <TotalCorrect correct={props.correct} />
      <TotalIncorrect incorrect={props.incorrect} />
    </View>
  )
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
