import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, ActivityIndicator, StyleSheet, FlatList } from 'react-native';

import api from '../../api';

import HeaderNavigation from '../../components/HeaderNavigation';
import Card from '../../components/Card';

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const APINews = async () => {
    try {
      const response = await api.get('top-headlines?country=br&apiKey=9c567fab8f7a4b9b9693e9f9637fb243')
      setNews(response.data.articles);
      setLoading(false)
    } catch (e) {
      console.log(e);
    };
  };

  useEffect(() => {
    APINews();
  }, [])

  if (loading) {
    return (
      <>
        <HeaderNavigation title="News" />
        <View style={styles.container} style={styles.loading}>
          <ActivityIndicator size="large" color="#201E24" />
        </View>
      </>
    )
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <HeaderNavigation title="News" />
        <FlatList 
          data={news}
          keyExtractor={(item, index) => 'key' + index}
          renderItem={({ item }) => <Card author={item.author} title={item.title} image={item.urlToImage} content={item.content} />}
        />
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5'
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e5e5e5'
  }
});

export default Home;