import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import {colors} from '@/constants/colorConstant'



const CustomInput = ({label, isPw=false, ...props}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View>
      {
        label && <Text style={styles.label}>{label}</Text>
      }
      <View style={styles.container}>
        <TextInput 
          style={[styles.input, isFocused && styles.focused]}
          secureTextEntry={isPw}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
      </View>
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
  label :{
    fontSize : 14,
    marginBottom : 6,
    color : colors.GRAY_500
  },
  container:{

  },
  input :{
    fontSize :16,
    height : 42,
    borderRadius : 8,
    paddingHorizontal : 10,
    justifyContent : 'center',
    backgroundColor : colors.GRAY_100,
    borderColor : colors.GRAY_500,
    borderWidth : 1
  },
  focused :{
    borderColor : colors.ORANGE_700
  }
})