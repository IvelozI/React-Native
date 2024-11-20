import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CardManualWithoutButtons = () => {
  return (
    <View style={styles.card}>
      <Image
        source={require('./assets/LISA.png')} //imagen de LiSA
        style={styles.image}
      />
      <Text style={styles.title}>Artista: LiSA</Text>
      <Text style={styles.subtitle}>Genero: JPop/Rock</Text>
      <Text style={styles.description}>
        LiSA es una cantante japonesa conocida por sus potentes interpretaciones y contribuciones a canciones de apertura y cierre de animes populares, como *Sword Art Online* y *Kimetsu no Yaiba*. 
        Su estilo combina rock y pop, atrayendo una gran base de fans internacional.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { 
    padding: 10, 
    backgroundColor: '#fff', 
    margin: 10, 
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: { 
    width: '100%', 
    height: 150, 
    borderRadius: 10, 
    marginBottom: 10 
  },
  title: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 5 
  },
  subtitle: { 
    fontSize: 14, 
    color: '#555', 
    marginBottom: 10 
  },
  description: { 
    fontSize: 12, 
    color: '#777', 
    marginBottom: 10 
  },
});

export default CardManualWithoutButtons;
