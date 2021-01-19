/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Axios from 'axios'
import store from '../assets/config/store'
import {  launchCamera, launchImageLibrary} from 'react-native-image-picker';


export default class Main extends Component{

  state = {
    photo: null,
  }


  takePhoto = () => {
    let options = {
      noData: true,
      // maxWidth: 300,
      // maxHeight: 550,
      // quality: 1,
    }
    // launchCamera(options, response => {
    //   this.setState({ photo: response })
    //   this.sendRequst()
    //   this.getExample()
    // })

    launchImageLibrary(options, response => {
      // console.log('Response = ', response);
      if (response.uri) {
      this.setState({ photo: response })
      this.sendRequst()
      this.getExample()
      }
    })
    
  }


  getExample = async () => {
    var that = this
    const headers = {
      'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>'
    };
    
    Axios.get('http://10.0.2.2:8000/api/getmain/', {

  }, 
    headers
    ).then(function (result){
      console.log('REESesult:' , result.data)
      if (result.data){
        store._mainfood1(result.data[0])
        store._mainfood2(result.data[1])
        store._mainfood3(result.data[2])
        that.props.navigation.navigate('MainFood')
      }
      else{
        console.log("Error in data, photo selection")
      }
    }).catch((err) => {
      console.log('CAATCcathc err:', JSON.stringify(err))
    })
  }


  render(){
    return(

      <View style={styles.container}>
        <View style={{width:wp('100%'), height:hp('60%')}}></View>
        
        <Text style={styles.textStyle}>FoodCalorie App</Text>
        
        <TouchableOpacity onPress={() => {
          this.takePhoto()
        }}  style={{backgroundColor:'blue', alignSelf:'center', width:wp('60%'), 
        height:hp('10%'), borderRadius: 100,justifyContent: 'center', marginTop:40}}>
          <Text style={styles.sectionTitle}>Choose PHOTO</Text>
        </TouchableOpacity>
      </View>
    );
  }



  sendRequst = () => {
    console.log("photo pring",this.state.photo);
  fetch("http://10.0.2.2:8000/api/postimage/", {  
    method: "POST",
    body: this.createFormData(this.state.photo)
  })
    .then(function (response) {
      console.log("response :", response);
})
    .catch(function (error) {
      console.log("error from image :", error);
    }
 )};

 createFormData = (photo) => {
  const data = new FormData();

  data.append("photo", {
    name: photo.fileName,
    type: photo.type,
    uri:
      Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
  });

  console.log("DATA: ", data);
  return data;

};

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textStyle: {
    fontSize: 45,
    alignSelf: 'center'
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
    alignSelf: 'center',
    color: 'white'
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

