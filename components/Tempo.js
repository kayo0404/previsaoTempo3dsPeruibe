import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Tempo() {
 return (
   <>
        <Text style={styles.texto}>Min: </Text>
        <Text style={styles.texto}>Max: </Text>
        <Text style={styles.texto}>Descrição: </Text>
   </>
  );
}

    const styles = StyleSheet.create({
        texto:{
            fontSize: 20,
            marginLeft: '25%',
            marginTop: 25 
        }
    });