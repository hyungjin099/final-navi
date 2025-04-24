import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/common/CustomInput'
import CustomButton from '../../components/common/CustomButton'
import { api_join } from '../../apis/memberApi'

const JoinScreen = () => {
  const [joinData, setJoinData] = useState({
    memEmail : '',
    memPw : '',
    memName : ''
  });

  const handleJoinData = (text, name) => {
    setJoinData({
      ...joinData,
      [name] : text
    });
  }
  const join = () => {
    console.log(joinData);

    api_join(joinData)
    .then(res => alert('성공'))
    .catch(e => console.log(e));
  }

  return (
    <View>
      <View>
        <CustomInput 
          label={'아이디'} 
          value={joinData.memEmail} 
          onChangeText={text => handleJoinData(text, 'memEmail')}
        />
      </View>
      <View>
        <CustomInput 
          label={'비밀번호'} isPw={true} 
          value={joinData.memPw}
          onChangeText={text => handleJoinData(text, 'memPw')}
        />
      </View>
      <View>
        <CustomInput 
          label={'이름'}
          value={joinData.memName}
          onChangeText={text => handleJoinData(text, 'memName')}
        />
      </View>
      <View>
        <CustomButton 
          label='회원가입' 
          size='large' 
          onPress={() => join()}/>
      </View> 
    </View>
  )
}

export default JoinScreen

const styles = StyleSheet.create({})