import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/componentes/Header';

export default class App extends React.Component {
    constructor(props) {
      super(props);
      
    }


    render() {
      return (
        <Header title="GiphyLandia" />
      )
    }
}



