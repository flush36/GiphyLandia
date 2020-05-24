import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/componentes/Header';
import axios from 'axios';

export default class App extends React.Component {
    constructor(props) {
      super(props);
      
    }

    componentDidMount() {
      axios.get('https://api.giphy.com/v1/gifs/trending?api_key=k4GKQO8QhDnXYdswOdLoSGoXvmuDHjdV&limit=1')
        .then(response => {
          const { data } = response.data;
          console.log(data)
        });
    }


    render() {
      return (
        <Header title="GiphyLandia" />
      )
    }
}



