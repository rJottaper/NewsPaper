import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const Input = ({ title, value, newValue, placeholder, name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.border} />
      <View style={styles.content}>
        <Icon name={name} style={styles.icon} />
        <TextInput style={styles.input} value={value} onChangeText={newValue} placeholder={placeholder} maxLength={20} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  border: {
    borderBottomWidth: 0.8,
    width: '30%'
  },
  content: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 0.4,
    width: '100%',
  },
  icon: {
    fontSize: 22,
    marginTop: 14
  },
  input: {
    marginLeft: 4,
    marginTop: 2
  }
});

export default Input;