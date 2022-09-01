import  React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, ScrollView} 
from 'react-native';
import Api from './components/Api';
import  Tempo  from './components/Tempo';

export default function App() {
      const [city, setCity] = useState(0);
      const [city2, setCity2] = useState(0);
      const [city3, setCity3] = useState(0);
      const [inputCity, setInputCity] = useState(0);

      async function buscaCep(){
        const response = await Api.get('weather?array_limit=2&fields=only_results,temp,city_name,forecast,max,min,date,description&key=89e1add9&city_name='+inputCity);

        setCity(response.data.forecast[0]);
        setCity3(response.data.forecast[1]);
        setCity2(response.data);
      }
  return ( 
    

    <View style={styles.container}>
    
      <View style={styles.bloco}>
        <View style={styles.header}>
          <Text style={styles.titulo}>Previsão do Tempo</Text>

          </View>
      </View>
      <View style={styles.blocoGeral}>
        <Text style={styles.label}>Digite sua Cidade: </Text>
        <TextInput 
          placeholder='sua cidade ...'
          style={styles.input}
          onChangeText={(value)=>setInputCity(value)}
          
        />
      </View>
      <View style={styles.blocoGeral}>
        <TouchableOpacity style={styles.botao}
          onPress={buscaCep}
        >
          <Text style={styles.textoBotao}>Buscar</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scroll}>
      <Tempo data={city} data2={city2} data3={city3}/>
      <Tempo data={city} data2={city2} data3={city3}/>
      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',
    height: Dimensions.get('window').height,
    
  },
  bloco:{
    alignItems:'center',
    marginTop:20
  },
  header:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    backgroundColor: '#010485',
   

  },
  titulo:{
    fontSize:30,
    color: '#FFF'
  },
  label:{
    fontSize:25,
    marginLeft:'10%',

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
    marginTop: 3,
    backgroundColor:'#010485',
    borderRadius: 10,
    
  },
  textoBotao:{
    color:'#FFF',
    fontSize:20,
    textAlign:'center'
  },
  blocoGeral:{
    marginTop:15,
    marginVertical: 10
  },
  scroll:{
    width: '90%',
    marginLeft: '10%',
    marginTop: 10,
    height: '100%'
  }
});
