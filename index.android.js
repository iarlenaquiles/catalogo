import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import ListaItens from './src/components/ListaItens';

class catalogo extends Component {
  render() {
    const teste = 'teste';
    console.log(teste);
    return (
     <ListaItens />
    );
  }
}

AppRegistry.registerComponent('catalogo', () => catalogo);
