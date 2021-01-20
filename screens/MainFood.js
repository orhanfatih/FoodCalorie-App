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
import store from '../assets/config/store'
import { typeOf } from 'react-is';

export default class Main extends Component{
  
  state_2 = {
    main_food: null
  }


  getSubFoodList= async () => {
    var that = this
    const headers = {
      'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>'
    };

    Axios.get('http://10.0.2.2:8000/api/getsub/', {

  }, 
    headers
    ).then(function (result){
      console.log('GETSUBFOOD:' , result.data)
      var subfoodlistlength = Object.keys(result.data).length;
      // console.log('LENGTH SUBLIST', subfoodlistlength)
      // console.log('TYPE LENGTH SUBLIST', typeof(subfoodlistlength.toString()))
      
      if (subfoodlistlength.toString() == '1'){
        console.log('if number is: ', subfoodlistlength)
        store._subfood1(result.data[0])
        // this.getWeight()
        that.props.navigation.navigate('SubFood', { data: result.data })
        // that.props.navigation.navigate('SubFood')
      }
      else if (subfoodlistlength.toString() == '2'){
        console.log('if number is: ', subfoodlistlength)
        store._subfood1(result.data[0])
        store._subfood1(result.data[1])
        // this.getWeight()
        that.props.navigation.navigate('SubFood', { data: result.data })
        // that.props.navigation.navigate('SubFood')
      }
      else if (subfoodlistlength.toString() == '3'){
        console.log('if number is: ', subfoodlistlength)
        store._subfood1(result.data[0])
        store._subfood1(result.data[1])
        store._subfood3(result.data[2])
        // this.getWeight()
        that.props.navigation.navigate('SubFood', { data: result.data })
        // that.props.navigation.navigate('SubFood')
      }
      else if (subfoodlistlength.toString() == '4'){
        console.log('if number is: ', subfoodlistlength)
        store._subfood1(result.data[0])
        store._subfood1(result.data[1])
        store._subfood3(result.data[2])
        store._subfood3(result.data[3])
        // this.getWeight()
        that.props.navigation.navigate('SubFood', { data: result.data })
      }
      else if (subfoodlistlength.toString() == '5'){
        console.log('if number is: ', subfoodlistlength)
        store._subfood1(result.data[0])
        store._subfood1(result.data[1])
        store._subfood3(result.data[2])
        store._subfood3(result.data[3])
        store._subfood3(result.data[4])
        // this.getWeight()
        that.props.navigation.navigate('SubFood', { data: result.data })
      }
    }).catch((err) => {
      console.log('CAATCcathc err:', JSON.stringify(err))
    })
  }


  getWeight = async () => {
    var that = this
    const headers = {
      'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>'
    };
    Axios.get('http://10.0.2.2:8000/api/getweight/', {

  }, 
    headers
    ).then(function (result){
      console.log('GETWEIGHT:' , result.data)
      var weightlistlength = Object.keys(result.data).length;
      // console.log('LENGTH SUBLIST', weightlistlength)
      // console.log('TYPE LENGTH SUBLIST', typeof(weightlistlength.toString()))
  
      if (weightlistlength.toString() == '1'){
        console.log('if number is WEIGHT: ', weightlistlength)
        store._weight1(result.data[0])
      }
      else if (weightlistlength.toString() == '2'){
        console.log('if number is WEIGHT: ', weightlistlength)
        store._weight1(result.data[0])
        store._weight1(result.data[1])
      }
      else if (weightlistlength.toString() == '3'){
        console.log('if number is WEIGHT: ', weightlistlength)
        store._weight1(result.data[0])
        store._weight1(result.data[1])
        store._weight1(result.data[2])
      }
      else if (weightlistlength.toString() == '4'){
        console.log('if number is WEIGHT: ', weightlistlength)
        store._weight1(result.data[0])
        store._weight1(result.data[1])
        store._weight1(result.data[2])
        store._weight1(result.data[3])
      }
      else if (weightlistlength.toString() == '5'){
        console.log('if number is WEIGHT: ', weightlistlength)
        store._weight1(result.data[0])
        store._weight1(result.data[1])
        store._weight1(result.data[2])
        store._weight1(result.data[3])
        store._weight1(result.data[4])
      }
      

    }).catch((err) => {
      console.log('CAATCcathc WEIGHT err:', JSON.stringify(err))
    })
  }


  render(){
    return (
      <View style={styles.container}>
        <View style={{width:wp('100%'), height:hp('50%')}}>
        <Image style={{width:wp('100%')}} source={require('../assets/img/i01_steak.jpeg')}/>
        </View>
        <Text style={styles.textStyle}>
          MainFood Page
        </Text>
        {/* <TouchableOpacity onPress={() => {this.takePhoto()}}  
          style={{backgroundColor:'blue',alignSelf:'center', marginTop:15,marginBottom:15,borderRadius: 100, 
          width:wp('55%'), height:hp('6%'),justifyContent: 'center'}} title='bu buton'>
          <Text style={styles.sectionTitle}>Fotograf cekimi</Text>
        </TouchableOpacity> */}
        
        <View>
        <Text style={styles.textStyle3}>
          Three Predictions
        </Text>
      
        {/* <TouchableOpacity onPress={() => {
        console.log("burayageldi,", store.mainfood1)
          this.sendRequst_2(store.mainfood1)
          this.getSubFoodList()}}>
      {this.state &&
        <Text style={styles.textStyle2}>First Result is: {store.mainfood1}</Text>}
      </TouchableOpacity> */}
      <TouchableOpacity onPress={() => {
          this.sendRequst_2(store.mainfood1)
          this.getSubFoodList()}}>

        <Text style={styles.textStyle2}>First Result is: {store.mainfood1}</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => {
        this.sendRequst_2(store.mainfood2)
        this.getSubFoodList()}}>

        <Text style={styles.textStyle2}>Second Result is: {store.mainfood2}</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => {
        this.sendRequst_2(store.mainfood3)
        this.getSubFoodList()}}>
      
        <Text style={styles.textStyle2}>Third Result is: {store.mainfood3}</Text>
      </TouchableOpacity>
    </View>
      </View>
    )
  };


//     sendRequst = () => {
//       console.log("photo pring",this.state.photo);
//     fetch("http://10.0.2.2:8000/api/postimage/", {  
//       method: "POST",
//       body: this.createFormData(this.state.photo)
//     })
//       .then(function (response) {
//         console.log("response :", response);
// })
//       .catch(function (error) {
//         console.log("error from image :", error);
//       }
//    )};

//    createFormData = (photo) => {
//     const data = new FormData();
  
//     data.append("photo", {
//       name: photo.fileName,
//       type: photo.type,
//       uri:
//         Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
//     });
  
//     console.log("DATA: ", data);
//     return data;
// };

  sendRequst_2 = (choose) => {
    console.log("MAIN CHOOSEN FOOD",choose)
  fetch("http://10.0.2.2:8000/api/postmain/", {  
    method: "POST",
    body: JSON.stringify({
      main_food: choose
    }),
    headers: {'Content-Type': 'application/json' }
  })
    .then(response => response.text())
    .then(function (response) {
      console.log("response :", response);
})
    .catch(function (error) {
      console.log("error from image :", error);
    }
 )};

 createFormData_2 = () => {
  const data = new FormData();
  data.append('main_food', JSON.stringify(this.state_2.main_food))

  console.log("DATA_FOOD_NAME: ", data);

  return data;
};

}


const styles = StyleSheet.create({
  container: {
    marginTop:35,
    flex: 1,
  },
  textStyle: {
    fontSize: 40,
    alignSelf: 'center'
  },
  textStyle2: {
    fontSize: 20,
    marginTop:4,
  },
  textStyle3: {
    fontSize: 22,
    marginTop:4,
    marginBottom:4
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

