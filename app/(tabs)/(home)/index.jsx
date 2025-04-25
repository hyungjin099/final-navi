import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FeedItem from '../../../components/FeedItem';
import { dummyData } from '@/apis/dummyData';
import {colors} from '@/constants/colorConstant'
import Ionicons from '@expo/vector-icons/Ionicons';

const HomeScreen = () => {
  const data = dummyData;

  return (
    <View style={styles.container}>
      <FlatList 
        data={data} //반복 할 데이터
        renderItem={({item}) => <FeedItem item={item}/> } //아이템마다 진행할 코드
        keyExtractor={(item) => item.id} //key
        contentContainerStyle={styles.listContainer} //리스트 디자인
      />
      <Pressable 
        style={({pressed}) => [
          styles.writeBtn,
          pressed && styles.pressed
        ]}
        onPress={() => {}}
      >
        <Ionicons name="pencil-outline" size={24} color="white" />
      </Pressable>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex : 1,
    backgroundColor : 'white',
  },
  listContainer:{
    backgroundColor : colors.GRAY_200,
    gap:10,
    paddingVertical : 8,
    paddingHorizontal: 4
  },
  writeBtn:{
    position: 'absolute',
    width : 50,
    height : 50,
    backgroundColor : colors.ORANGE_600,
    borderRadius : 50,
    justifyContent : 'center',
    alignItems : 'center',
    bottom : 40,
    right : 30
  },
  pressed :{
    opacity : 0.8
  }
})








