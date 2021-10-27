import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'

import HeaderNavigation from '../../components/HeaderNavigation';
import News from '../../assets/news.svg'

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <HeaderNavigation title="News Paper" />
      <News width={250} height={250} />
      <View style={styles.content}>
        <Text style={styles.contentText}>The best way to get all the news in one place</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')} >
          <Text style={styles.buttonText}>CONTINUE</Text>
          <Icon name="chevron-right" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e5e5e5'
  },
  content: {
    backgroundColor: '#201E24',
    width: '100%',
    height: 250,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    justifyContent: 'space-evenly'
  },
  contentText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
    color: '#FFF',
    borderBottomWidth: 1,
    borderColor: '#FFF',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#E5E5E5',
    marginHorizontal: 20,
    padding: 12,
    borderRadius: 10
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  icon: {
    fontSize: 14,
    marginTop: 4,
  }
});

export default Welcome;