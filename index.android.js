import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import ListaItens from './src/components/ListaItens';

class catalogo extends Component {

  constructor(props) {
    super(props);
    console.log('Construindo a aplicação');
  }

  componentWillMount() {
    console.log('Fazer alguma coisa antes de renderizar');
  }

  componentDidMount() {
    console.log('Fazer alguma coisa depois de renderizar');
  }

  render() {
    console.log('Objeto é renderizado');
    return (
     <ListaItens />
    );
  }
}

AppRegistry.registerComponent('catalogo', () => catalogo);
