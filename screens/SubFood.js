/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {  SafeAreaView,  StyleSheet,  ScrollView,  View,  Text,  StatusBar,  Button,  TouchableOpacity,} from 'react-native';

import { Header,  LearnMoreLinks,  Colors,  DebugInstructions,  ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Axios from 'axios'
import store from '../assets/config/store'

// store yada state
export default class SubFood extends Component{
  state = {
    first: null,
    second: null,
    third: null,
  }

  putSubfood = (choose) => {
    console.log("SUB CHOOSEN FOOD",choose)
    store._subfoodchoosen(choose)
  fetch("http://10.0.2.2:8000/api/putsub/", {  
    method: "PUT",
    body: JSON.stringify({
      sub_food: choose
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



getResults= async () => {
  var that = this
  const headers = {
    'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>'
  };

  Axios.get('http://10.0.2.2:8000/api/getcalorie/', {
}, 
  headers
  ).then(function (result){
    console.log('GETRESULTS:' , result.data)
    console.log('GETRESULTS calorie: ' , result.data['calorie'])
    console.log('GETRESULTS fat :' , result.data['fat'])

    store._carbohydrate(result.data['carbohydrate'])
    store._fat(result.data['fat'])
    store._protein(result.data['protein'])
    store._sugars(result.data['sugars'])
    store._calorie(result.data['calorie'])
    console.log('successful')
  }).catch((err) => {
    console.log('CAATCcathc err:', JSON.stringify(err))
  })
}

  render(){
    return(

      <View style={styles.container}>
        <View style={{width:wp('100%'), height:hp('40%')}}>
        </View>
        <Text style={styles.textStyle}>
            Subfood Page
        </Text>
        <Text style={styles.textStyle2}>Press the SubFood Category</Text>

        <TouchableOpacity onPress={() => {
          this.putSubfood(store.subfood1)
          this.getResults() // burada result degerlerini alicaz ve degerleri store yapicaz
          this.props.navigation.navigate('ResultsPage')
        }} style={{backgroundColor:'yellow'}}>
        <Text style={styles.textStyle2}>First Subfood: {store.subfood1}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          this.putSubfood(store.subfood2)
          this.getResults() // burada result degerlerini alicaz ve degerleri store yapicaz
        }} style={{backgroundColor:'yellow'}}>
        <Text style={styles.textStyle2}>Second Subfood: {store.subfood2}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          this.putSubfood(store.subfood3)
          this.getResults() // burada result degerlerini alicaz ve degerleri store yapicaz
        }} style={{backgroundColor:'yellow'}}>
        <Text style={styles.textStyle2}>Third Subfood: {store.subfood3}</Text>
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
    fontSize: 35
  },
  textStyle2: {
    fontSize: 20
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

