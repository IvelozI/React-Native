import React from 'react';
import { Text, StyleSheet, Image, View, Button, Alert, TouchableHighlight, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainScreen({ navigation }) {
  return (
    <LinearGradient colors={['#37DB04', '#05DC25']} style={styles.background}>
      <Image
        source={require('./assets/LOGO_ORIGINAL_TRANSPARENCIA.png')}
        style={styles.logo}
        accessibilityLabel="Logo de la Municipalidad de Quinchao"
      />
      <Text style={styles.title}>Municipalidad de Quinchao</Text>
      <Text style={styles.subtitle}>Oficina de Medioambiente</Text>

      <Button
        title="Mostrar alerta"
        color="#39b54a"
        onPress={() => Alert.alert('¡Alerta!', 'Este es un mensaje')}
      />

      <TouchableHighlight
        onPress={() => Alert.alert('¡Alerta!', 'Botón Touchable')}
        underlayColor="#cce7cc"
        style={styles.touchableButton}
      >
        <Text style={styles.touchableText}>Boton1</Text>
      </TouchableHighlight>

      <Pressable
        onPress={() => Alert.alert('¡Alerta!', 'Nueva Alerta')}
        style={({ pressed }) => [
          styles.pressableButton,
          { backgroundColor: pressed ? '#cce7cc' : '#39b54a' }
        ]}
      >
        <Text style={styles.pressableText}>Boton2</Text>
      </Pressable>

      {/* Botón para navegar a la pantalla Home */}
      <Button
        title="Ir a Home"
        color="#39b54a"
        onPress={() => navigation.navigate('Home')}
      />

      <Image
        source={{ uri: 'https://developers.google.com/identity/images/btn_google_signin_light_normal_web.png' }}
        style={styles.googleButton}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 270,
    height: 300,
  },
  title: {
    color: 'blue',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
  },
  subtitle: {
    color: 'blue',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  googleButton: {
    width: 300,
    height: 40,
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  touchableButton: {
    padding: 10,
    backgroundColor: '#19CC98',
    borderRadius: 8,
  },
  touchableText: {
    color: '#fff',
  },
  pressableButton: {
    padding: 10,
    borderRadius: 5,
  },
  pressableText: {
    color: '#fff',
    fontWeight: '600',
  },
});
