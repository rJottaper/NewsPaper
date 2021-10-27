import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import HeaderNavigation from '../../components/HeaderNavigation';
import Input from '../../components/Input';
import Button from '../../components/Button';

const CreateAccount = () => {
  const navigation = useNavigation();
  
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <HeaderNavigation title="Create Account" name="chevron-left" onPress={() => navigation.goBack()} />
      <Input title="E-mail" value={email} newValue={setEmail} placeholder="Your E-mail" name="at" />
      <Input title="Username" value={username} newValue={setUsername} placeholder="Your Username" name="user" />
      <Input title="Password" value={password} newValue={setPassword} placeholder="Your Password" name="lock" />
      <Button title="Register" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5'
  }
})

export default CreateAccount;