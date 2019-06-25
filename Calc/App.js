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
  render() {
    let rows = [];
    for (let i=0; i<3; i++){
      let row = [];
      for (let j=0; j<3; j++) {
        row.push(
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>{j+i*3+1}</Text>
            </TouchableOpacity>)
      }
      rows.push(<View style={styles.row}>{row}</View>)
    }

    return (
      <View style={styles.container}>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}> 10,000/100</Text>
        </View>
        <View style={styles.result}>
          <Text style={styles.resultText}>100</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            {rows}
            <View style={styles.row}>
              <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>+/-</Text></TouchableOpacity>
              <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>0</Text></TouchableOpacity>
              <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>.</Text></TouchableOpacity>
            </View>

          </View>
          <View style={styles.operations}>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>=</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>+</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>-</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>X</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>/</Text></TouchableOpacity>
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
