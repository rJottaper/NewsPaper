import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import HeaderNavigation from '../../components/HeaderNavigation';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isValidUser, setIsValidUser] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const goToHome = () => {
    if (username == null && password == null) {
      setIsValidUser(false)
      setIsValidPassword(false) 
    }
    if (username == '' || username == null || username.length < 4) {
      return setIsValidUser(false)
    }
    if (password == '' || password == null || password.length < 6) {
      return setIsValidPassword(false)
    } 
    navigation.navigate('Home')  
  };

  const newValueInputUsername = (value) => {
    setUsername(value)
    if (value.length >= 4) {
      setIsValidUser(true)
    };
  };

  const newValueInputPassword = (value) => {
    setPassword(value)
    if (value.length >= 6) {
      setIsValidPassword(true)
    };
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderNavigation title="Login" />
      <Input title="Username" value={username} newValue={(value) => newValueInputUsername(value)} placeholder="Your Username" name="user" />
      {isValidUser ? null : <Text style={styles.msgError}>Username must be 4 characters long</Text>  }
      <Input title="Password" value={password} newValue={(value) => newValueInputPassword(value)} placeholder="Your Password" name="lock" />
      {isValidPassword ? null : <Text style={styles.msgError}>Password must be 6 characters</Text>}
      <Text style={styles.text}>Don't have an account?</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateAccount')}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      <Button title="Login" onPress={() => goToHome()} />
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
  },
  msgError: {
    margin: 10,
    color: '#ff305e'
  }
});

export default Login;