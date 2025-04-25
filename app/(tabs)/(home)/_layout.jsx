import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const HomeLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{headerShown : false}}/>
      <Stack.Screen 
        name='regFeed'
        options={{
          title : '글 등록',
          headerLeft: () => {
            <View>
              <AntDesign name="arrowleft" size={24} color="black" />
            </View>
          },
          headerRight : () => {
            <View>
              <MaterialIcons name="save-alt" size={24} color="black" />
              <Text>sss</Text>
            </View>
          }
        }} 

      />
      <Stack.Screen name='more' options={{headerShown : false}}/>
    </Stack>
  )
}

export default HomeLayout

const styles = StyleSheet.create({})