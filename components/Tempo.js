import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function Tempo(props) {
 return (
   <>
        <View style={styles.bloco}>
          <Text style={styles.textoCidade}>Cidade: {props.data2.city_name}</Text>
          <Text style={styles.texto}> HOJE: {props.data.date}</Text>
          <Text style={styles.texto}>Temperatura: {props.data2.temp}°C</Text>
          <Text style={styles.texto}>Min: {props.data.min}°C</Text>
          <Text style={styles.texto}>Max: {props.data.max}°C</Text>
          <Text style={styles.texto}>Descrição: {props.data.description}</Text>

        </View>

        <View style={styles.bloco}>
        <Text style={styles.texto}> AMANHÃ:{props.data3.date} </Text>
        <Text style={styles.texto}>Min: {props.data3.min}°C</Text>
          <Text style={styles.texto}>Max: {props.data3.max}°C</Text>
          <Text style={styles.texto}>Descrição: {props.data3.description}</Text>


        </View>
   </>
  );
}

    const styles = StyleSheet.create({
        bloco:{
            display: 'flex',
            flexDirection:'column',
            justifyContent:'space-around',
            alignItems:'center',

            width: '90%',
            height: '50%',
            borderRadius: 50,
            backgroundColor: '#aaaab0',
            marginTop: 10
        },
        texto:{
            fontSize: 20,
        },
        textoCidade:{
            fontFamily: 'serif',
            fontSize: 25
        }
    });