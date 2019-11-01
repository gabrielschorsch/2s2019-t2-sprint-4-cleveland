import React, { Component } from 'react';

import { View, Text, FlatList, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';

import DatePicker from 'react-native-datepicker';

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



export default class cleveland extends Component {
  constructor() {
    super();
    this.state = {
      listaMedicos: [],
      listaEsp: [],
      nome: '',
      dataNascimento: "2019-01-01T00:00:00",
      crm: '',
      idEspecialidade: 1
    }
  }

  componentDidMount() {
    this._recuperarMedicos();
  }

  _recuperarMedicos = async () => {
    await fetch('http://192.168.4.16:5000/api/medicos')
      .then(x => x.json())
      .then(x => this.setState({ listaMedicos: x }))
  }

  _tratarData = (data) => {
    let valores = data.split('T')
    let dataRecebida = valores[0].split('-');
    return dataRecebida[2] + '/' + dataRecebida[1] + '/' + dataRecebida[0];
  }

  _recuperarEspecialidades = async () => {
    await fetch('http://192.168.4.16:5000/api/especialidades')
      .then(x => x.json())
      .then(x => this.setState({ listaEsp: x }))
  }

  _cadastrar = async () => {
    console.log(this.state)
    await fetch('http://192.168.4.16:5000/api/medicos',
      {
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }, body: JSON.stringify({
          nome: this.state.nome,
          dataNascimento: this.state.dataNascimento,
          crm: this.state.crm,
          idEspecialidade: this.state.idEspecialidade
        })
      })
      .catch(x => console.warn(x))
  }




  render() {
    return (

      <ScrollView>
        <View>

          <FlatList data={this.state.listaMedicos} style={styles.lista} keyExtractor={item => item.idMedico} renderItem={({ item }) => (
            <View style={styles.listaItem}>
              <Text styles={styles.tituloTabela}>#: {item.idMedico}</Text>
              <Text styles={styles.tituloTabela}>Nome: {item.nome}</Text>
              <Text styles={styles.tituloTabela}>DataNascimento {this._tratarData(item.dataNascimento)}</Text>
              <Text styles={styles.tituloTabela}>CRM: {item.crm}</Text>
              <Text styles={styles.tituloTabela}>Ativo: {item.ativo}</Text>
              <Text styles={styles.tituloTabela}>Especialidade: {item.idEspecialidadeNavigation.nome}</Text>
            </View>
          )} />
        </View>
        <View>
          <TextInput onChangeText={value => this.setState({ nome: value })} placeholder='Nome' />
          <DatePicker
            date={''} //initial date from state
            mode="date" //The enum of date, datetime and time
            placeholder="Data de Nascimento"
            format="YYYY-MM-DDTHH:mm:SS"
            maxDate="01-01-2019"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={(date) => { this.setState({ dataNascimento: date }) }}
          />
          <TextInput onChangeText={value => this.setState({ crm: value })} placeholder='CRM' />
          <TouchableOpacity onPress={this._cadastrar}>
            <Text>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
