import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HeaderNavigation = ({ title, name, onPress }) => {
  if (Icon) {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Icon name={name} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>
          {title}
        </Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#201E24',
    padding: 15
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF'
  },
  icon: {
    marginTop: 2,
    fontSize: 16,
    color: '#FFF',
  }
});

export default HeaderNavigation;