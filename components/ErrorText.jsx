import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ErrorText = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{text}</Text>
    </View>
  )
}

export default ErrorText

const styles = StyleSheet.create({
  errorText:{
    color : 'red',
    fontSize : 12,
    fontStyle :'italic'
  }
})