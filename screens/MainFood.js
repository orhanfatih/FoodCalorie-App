/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, TouchableOpacity, Image, ImagePickerIOS } from 'react-native';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {  launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Axios from 'axios'

export default class Main extends Component{
  state = {
    photo: null,
  }

  takePhoto = async () => {
    const data = new FormData();
  
    let options = {
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);
      this.setState({ photo: response })
    })

    this.sendRequst(data)
  }

  sendRequst = async (data) => {
    const headers = {
      'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>'
    };
    
    Axios.post('http://127.0.0.1:8000/api/image/', {
      photo: this.state.photo,
    }, 
    headers
    ).then(function (result){
      console.log('REESesult:' , result)
    }).catch((err) => {
      console.log('CAATCcathc err:', JSON.stringify(err))
    })
  }

  render(){
    return(

      <View style={styles.container}>
        <View style={{width:wp('100%'), height:hp('50%')}}>
        <Image style={{width:wp('100%')}} source={require('../assets/img/caesar.jpg')}/>
        </View>
        <Text style={styles.textStyle}>
          bu bir 2.sayfa yazisiidir
        </Text>
        <TouchableOpacity onPress={() => {
          this.takePhoto()
        }}  style={{backgroundColor:'yellow'}} title='bu buton'>
          <Text>BAS BANA</Text>
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textStyle: {
    fontSize: 45
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

