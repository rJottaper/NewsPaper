import React from 'react';
import { SafeAreaView, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import HeaderNavigation from '../../components/HeaderNavigation';
import Button from '../../components/Button'

const NewsDetails = ({ route }) => {
  const navigation = useNavigation()

  const { author, title, image, content } = route.params
 
  return (
    <SafeAreaView style={styles.container}> 
      <HeaderNavigation title={author} name="chevron-left" onPress={() => navigation.goBack()} />
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
      <Button title="Full News" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5'
  },
  image: {
    width: '100%',
    height: 280,
    borderRadius: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 15
  },
  content: {
    fontSize: 18,
    marginHorizontal: 10,
    marginVertical: 10
  }
});

export default NewsDetails;