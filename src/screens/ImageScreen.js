import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
  <View>
    <ImageDetail
      score='10'
      title='Forest'
      imageSource={ require('../../assets/forest.jpg') }
      />
    <ImageDetail
      score='10'
      title='beach'
      imageSource={ require('../../assets/beach.jpg') }
    />
    <ImageDetail
      score='8'
      title='Mountain' 
      imageSource={ require('../../assets/mountain.jpg') }
    />
  </View>
  )
};

const styles = StyleSheet.create({  });

export default ImageScreen;
