import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import HeaderNavigation from '../../components/HeaderNavigation';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <HeaderNavigation title="Login" />
      <Input title="Username" value={username} newValue={setUsername} placeholder="Your Username" name="user" />
      <Input title="Password" value={password} newValue={setPassword} placeholder="Your Password" name="lock" />
      <Text style={styles.text}>Don't have an account?</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateAccount')}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      <Button title="Login" onPress={() => navigation.navigate('Home')} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5'
  },
  text: {
    marginHorizontal: 10,
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold'
  },
  button: {
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold'
  }
});

export default Login;