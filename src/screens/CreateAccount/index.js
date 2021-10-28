import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import HeaderNavigation from '../../components/HeaderNavigation';
import Input from '../../components/Input';
import Button from '../../components/Button';

const CreateAccount = () => {
  const navigation = useNavigation();
  
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isValidEmail, setIsValidEmail] = useState(true)
  const [isValidUser, setIsValidUser] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const goToHome = () => {
    if (username == null && password == null && email == null) {
      setIsValidUser(false)
      setIsValidPassword(false)
      setIsValidEmail(false)
    }
    let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(valid.test(email) === false) {
      setIsValidEmail(false)
      setEmail(email)
      return false
    }
    if (username == '' || username == null || username.length < 4) {
      return setIsValidUser(false)
    }
    if (password == '' || password == null || password.length < 6) {
      return setIsValidPassword(false)
    } 
    navigation.navigate('Home')  
  };

  const newValueInputEmail = (value) => {
    setEmail(value)
    let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(valid.test(email) === true) {
      setIsValidEmail(true)
      return true
    };
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
      <HeaderNavigation title="Create Account" name="chevron-left" onPress={() => navigation.goBack()} />
      <Input title="E-mail" value={email} newValue={(value) => newValueInputEmail(value)} placeholder="Your E-mail" name="at" keyboardType="email-address" />
      {isValidEmail ? null : <Text style={styles.msgError}>Please, check your e-mail</Text>}
      <Input title="Username" value={username} newValue={(value) => newValueInputUsername(value)} placeholder="Your Username" name="user" />
      {isValidUser ? null : <Text style={styles.msgError}>Username must be 4 characters long</Text>}
      <Input title="Password" value={password} newValue={(value) => newValueInputPassword(value)} placeholder="Your Password" name="lock" secureTextEntry={true} />
      {isValidPassword ? null : <Text style={styles.msgError}>Password must be 6 characters</Text>}
      <Button title="Register" onPress={() => goToHome()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5'
  },
  msgError: {
    margin: 10,
    color: '#ff305e',
    fontWeight: 'bold'
  }
})

export default CreateAccount;