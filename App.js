import  React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} 
from 'react-native';
import Api from './components/Api';
import  Tempo  from './components/Tempo';

export default function App() {
      const [city, setCity] = useState(0);
      const [inputCity, setInputCity] = useState(0);

      async function buscaCep(){
        const response = await Api.get('&city_name='+inputCity);

        setCity(response.data)
      }
  return ( 
    <View style={styles.container}>
      <View style={styles.bloco}>
        <Text style={styles.titulo}>Previsão do Tempo</Text>
      </View>
      <View style={styles.blocoGeral}>
        <Text style={styles.label}>Digite sua Cidade: </Text>
        <TextInput 
          placeholder='sua cidade ...'
          style={styles.input}
          
        />
      </View>
      <View style={styles.blocoGeral}>
        <TouchableOpacity style={styles.botao}
          onPress={buscaCep}
        >
          <Text style={styles.textoBotao}>Buscar</Text>
        </TouchableOpacity>
      </View>
      <Tempo/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bloco:{
    alignItems:'center',
    marginBottom:20,
    marginTop:20
  },
  titulo:{
    fontSize:30,
    backgroundColor: '#010485',
    color: '#FFF',
    padding: 7,
    width: '100%',
    textAlign: 'center'

  },
  label:{
    fontSize:20,
    marginLeft:'10%'
  },
  input:{
    marginLeft:'10%',
    borderBottomWidth:2,
    marginRight:'10%',
    fontSize:20,
    padding: 10,
    borderRadius: 10,
    
  },
  botao:{
    padding: 5,
    marginTop: 10,
    marginLeft:'10%',
    marginRight:'10%',
    backgroundColor:'#010485',
    borderRadius: 10,
    
  },
  textoBotao:{
    color:'#FFF',
    fontSize:20,
    textAlign:'center'
  },
  blocoGeral:{
    marginTop:20
  }
});
