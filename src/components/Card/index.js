import React from 'react';
import { Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Card = ({ author, title, image, content }) => {
  const navigation = useNavigation();

  const sendItens = () => {
    navigation.navigate('NewDetails', {
      author: author,
      title: title,
      image: image,
      content: content,
    })
  }

  return (
    <TouchableOpacity style={styles.container} onPress={() => sendItens()}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.image} source={{ uri: image }} />   
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#201E24',
    marginTop: 20,
    height: 250,
    marginHorizontal: 10,
    borderRadius: 15,
  },
  title: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 10,
    marginHorizontal: 10,
  },
  image: {
    marginTop: 10,
    width: '100%',
    height: 180,
    borderRadius: 10,
  },
})

export default Card;