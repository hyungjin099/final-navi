import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '@/components/common/CustomInput'
import ErrorText from '../../../components/ErrorText';

const RegScreen = () => {
  const [feedData, setFeedData] = useState({
    title : '',
    content : ''
  });

  const [errors, setErrors] = useState({
    title:'',
    content:''
  });

  const handleFeedData = (text, name) => {
    setFeedData({
      ...feedData,
      [name] : text
    });

    validateField(name, text)
  }

  const validateField = (name, value) => {
    let errorMsg = '';

    switch(name){
      case 'title':
        if(!value.trim()){
          errorMsg = '제목을 입력해주세요';
        } else if(value.length < 2){
          errorMsg = '제목은 2자 이상이어야 합니다.';
        } else if(value.length > 30){
          errorMsg = '제목은 30자 이하여야 합니다.';
        }
        break;
      case 'content': 
        if(!value.trim()){
          errorMsg = '내용을 입력해주세요';
        } else if(value.length < 2){
          errorMsg = '제목은 2자 이상이어야 합니다.';
        } else if(value.length > 100){
          errorMsg = '제목은 100자 이하여야 합니다.';
        }
    }

    setErrors({
      ...errors,
      [name] : errorMsg
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <CustomInput 
          label='제 목' 
          value={feedData.title}
          onChangeText={text => handleFeedData(text, 'title')}
        />
        {errors.title && <ErrorText text={errors.title}/> }
      </View>
      <View>
        <CustomInput 
          label='내 용'
          multiline
          value={feedData.content}
          onChangeText={text => handleFeedData(text, 'content')}
        />
        {errors.title && <ErrorText text={errors.title}/> }
      </View>
    </View>
  )
}

export default RegScreen

const styles = StyleSheet.create({
  container :{
    padding : 14
  },
  inputView:{
    marginBottom : 16
  }
})