import React, { useState } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

const CounterScreen = () => {
const [counter, setCounter] = useState(0);
return(
  <View>
    
    <Button
    onPress={ () => {setCounter(counter + 1)}}
    title='Increase'
    />

    <Button
    onPress={ () => { 
      setCounter(counter - 1)
     } }
    title='Decrease' 
    />

    <Text> Current Counter: </Text>
    <Text> {counter} </Text>
  </View>
)
};

export default CounterScreen
