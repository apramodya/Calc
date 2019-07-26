/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default class App extends Component<> {

  constructor() {
    super();
    this.state = {
      resultText: "",
      calculatedText: "0"
    };
    this.operations = ['DEL','+','-','*','/'];
  }

  calculateResult() {
    const text = this.state.resultText;
    this.setState({
      calculatedText: eval(text)
    })
  }

  operate(operand) {
    switch (operand) {
      case 'DEL':
        let text = this.state.resultText.split('');
        text.pop();
        this.setState({
          resultText: text.join('')
        });
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        const lastChar = this.state.resultText.split('').pop();
        
        if (this.operations.indexOf(lastChar) > 0) return;

        if (this.state.resultText === '') return;
        this.setState({
          resultText: this.state.resultText + operand
        })

    }
  }

  validateText() {
    let text = this.state.resultText;

    return this.operations.indexOf(text.split('').pop()) <= 0;
  }

  buttonPressed(text) {
    if (text === '=') {
      return this.validateText() && this.calculateResult()
    }
    this.setState({
      resultText: this.state.resultText+text
    })
  }

  render() {
    let rows = [];
    let nums = [[1,2,3], [4,5,6], [7,8,9], ['.',0,'=']];
    
    for (let i=0; i<4; i++) {
      let row = [];
      for (let j=0; j<3; j++) {
        row.push(
            <TouchableOpacity key={nums[i][j]} onPress={() => this.buttonPressed(nums[i][j])}>
              <Text style={styles.buttonText}>{nums[i][j]}</Text>
            </TouchableOpacity>
        )
      }
      rows.push(
          <View key={i} style={styles.row}>{row}</View>
      )
    }

    let ops = [];

    for (let i=0; i<5; i++) {
      ops.push(
          <TouchableOpacity key={this.operations[i]} onPress={() => this.operate(this.operations[i])} style={styles.button}>
            <Text style={[styles.buttonText, styles.white]}>{this.operations[i]}</Text>
          </TouchableOpacity>
      )
    }

    return (
      <View style={styles.container}>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}> {this.state.resultText}</Text>
        </View>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.calculatedText}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            {rows}
          </View>
          <View style={styles.operations}>
            {ops}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  calculation: {
    flex: 2,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingEnd: 10,
  },
  calculationText: {
    fontSize: 40,
    color: 'white',
  },
  result: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingEnd: 10,
  },
  resultText: {
    fontSize: 25,
    color: 'white',
  },
  button: {
    flex:1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 25,
    color: 'white'
  },
  buttons: {
    flexDirection: 'row',
    flex: 7,
  },
  numbers: {
    flex: 3,
    backgroundColor: 'grey',
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'black',
  }
});
