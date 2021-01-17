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

export default class Main extends Component{
  state = {
    photo: null,
  }
  
  state_2 = {
    main_food: null
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
    // })

    launchImageLibrary(options, response => {
      // console.log('Response = ', response);
      if (response.uri) {
      this.setState({ photo: response })
      this.sendRequst()
      }
    })
  }

  state = {
    first: null,
    second: null,
    third: null,
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
      that.setState({first: result.data[0]})
      that.setState({second: result.data[1]})
      that.setState({third: result.data[2]})
    }).catch((err) => {
      console.log('CAATCcathc err:', JSON.stringify(err))
    })
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
      if (result.data){
        store._subfood1(result.data[0])
        store._subfood2(result.data[1])
        store._subfood3(result.data[2])
      }
      else{
        // direk result sayfasina gidicek, subfood secenegi olmayanlar
      }
    }).catch((err) => {
      console.log('CAATCcathc err:', JSON.stringify(err))
    })
  }


  render(){
    return (
      <View style={styles.container}>
        <View style={{width:wp('100%'), height:hp('50%')}}>
        <Image style={{width:wp('100%')}} source={require('../assets/img/caesar.jpg')}/>
        </View>
        <Text style={styles.textStyle}>
          MainFood Sayfasi
        </Text>
        {/* <TouchableOpacity onPress={() => {this.sendRequst()}}  
          style={{backgroundColor:'blue'}} title='bu buton ikinci'>
          <Text>Fotograf yukle</Text>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => {this.takePhoto()}}  
          style={{backgroundColor:'yellow'}} title='bu buton'>
          <Text>Fotograf cekimi</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => {this.props.navigation.navigate('SubFood')}}
        style={{backgroundColor:'blue'}} title='subfood button'>
        <Text> Sub Food Direct</Text>
        </TouchableOpacity> */}

        <TouchableOpacity onPress={() => {this.getExample()
          // console.log('first state: ', this.state.first)
          //this.props.navigation.navigate('MainFood')
        }}  style={{backgroundColor:'yellow'}}>
          <Text style={styles.textStyle2}>To Get Results Press</Text>
          <Text>{store.deneme}</Text>
        </TouchableOpacity>
        
        <View>
        <Text style={styles.textStyle2}>
          Results:
        </Text>
      <TouchableOpacity onPress={() => {
          this.sendRequst_2(this.state.first)
          this.getSubFoodList()
          this.props.navigation.navigate('SubFood')}}>
      {this.state &&
        <Text style={styles.textStyle2}>First Result is: {this.state.first}</Text>}
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => {
        this.sendRequst_2(this.state.second)
        this.getSubFoodList()
        this.props.navigation.navigate('SubFood')}}>
      {this.state &&
        <Text style={styles.textStyle2}>Second Result is: {this.state.second}</Text>}
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => {
        this.sendRequst_2(this.state.third)
        this.getSubFoodList()
        this.props.navigation.navigate('SubFood')}}>
      {this.state &&
        <Text style={styles.textStyle2}>Third Result is: {this.state.third}</Text>}
      </TouchableOpacity>
    </View>
      </View>
    )
  };


    sendRequst = () => {
      console.log("photo pring",this.state.photo);
      // axios({
      //   url: 'http://10.0.2.2:8000/api/image/',
      //   method: 'POST',
      //   // body: this.createFormData(this.state.photo),
      //   headers: {
      //     'Content-Type': 'multipart/form-data'
      //   }
      // })
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

  // sendRequst = () => {
  //   // fetch("http://10.0.2.2:3000/api/upload", {
  //   fetch("http://127.0.0.1:8000/api/image/", {  
  //     method: "POST",
  //     // body: this.createFormData(this.state.photo, { userId: "123" })
  //     body: this.createFormData(this.state.photo)
  //   })
  //   .then(response => response.text())
  //   .then(response => {
  //     console.log("upload succes", response);
  //     alert("Upload success!");
  //     this.setState({ photo: null });
  //   })
  //   .catch(error => {
  //     console.log("upload error", error);
  //     alert("Upload failed!");
  //   });
  // };

  // createFormData = ( photo ) => {
  //   const data = new FormData();
  //   console.log(data);
  //   data.append("photo", {
  //     name: this.state.photo.fileName,
  //     type: this.state.photo.type,
  //     uri:
  //       Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
  //   });
  //   console.log(2,data);

  //   return data;
  // };
  // createFormData = (photo, body) => {
  //   const data = new FormData();
  
  //   data.append("photo", {
  //     name: photo.fileName,
  //     type: photo.type,
  //     uri:
  //       Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
  //   });
  
  //   Object.keys(body).forEach(key => {
  //     data.append(key, body[key]);
  //   });
  
  //   return data;
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

