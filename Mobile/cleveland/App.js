import React, { Component } from 'react';

import { View, Text, FlatList, StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  lista: {
    marginHorizontal: 30,
    marginVertical: 30,

  },

  listaItem: {
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 15
  },

  tituloTabela: {
    fontSize: 14,
    fontWeight: 'bold'
  }
})


const mockData = [
  {
    idMedico: 1,
    nome: 'Doutor Drauzio Varella',
    dataNascimento: '2019-11-01T:00:00:0000',
    crm: 11,
    ativo: 1,
    especialidade: {
      idEspecialidade: 1,
      nome: 'Otorrinolaringologista'
    }
  },
  {
    idMedico: 2,
    nome: 'Doutor Drauzia Varello',
    dataNascimento: '2019-10-01T:00:00:0000',
    crm: 12,
    ativo: 1,
    especialidade: {
      idEspecialidade: 1,
      nome: 'Otorrinolaringologista'
    }
  }
]

_tratarData = (data) => {
  let valores = data.split('T')
  let dataRecebida = valores[0].split('-');
  return dataRecebida[2] + '/' + dataRecebida[1] + '/' + dataRecebida[0];
}

// recuperarMedicos = async() = {

// }

export default class cleveland extends Component {
  render() {
    return (
      <View>
        <FlatList data={mockData} style={styles.lista} keyExtractor={item => item.idMedico} renderItem={({ item }) => (
          <View style={styles.listaItem}>
            <Text styles={styles.tituloTabela}>#: {item.idMedico}</Text>
            <Text styles={styles.tituloTabela}>Nome: {item.nome}</Text>
            <Text styles={styles.tituloTabela}>DataNascimento {_tratarData(item.dataNascimento)}</Text>
            <Text styles={styles.tituloTabela}>CRM: {item.crm}</Text>
            <Text styles={styles.tituloTabela}>Ativo: {item.ativo}</Text>
            <Text styles={styles.tituloTabela}>Especialidade: {item.especialidade.nome}</Text>
          </View>
        )} />

      </View>
    );
  }
}
