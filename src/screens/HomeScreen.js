import React from 'react';
import { Text, StyleSheet, Button, View, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {

  return(
  <View>
    <Text style={styles.text}> My home! </Text>
    
    <Button
      title='Go to Components demo'
      onPress={ () => navigation.navigate('Components') }
    />
    
    <Button
    title='Go to List Demo'
    onPress={ () => navigation.navigate('List') }
    />

  <Button
    title='Go to Image'
    onPress={ () => navigation.navigate('Image') }
    />

  <Button
    title='Go to Counter Demo'
    onPress={ () => navigation.navigate('Counter') }
    />
    
  </View>
  )
};

const styles = StyleSheet.create({ 
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
