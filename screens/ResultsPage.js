/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {  SafeAreaView,  StyleSheet,  ScrollView,  View,  Text,  StatusBar,  Button,  TouchableOpacity,} from 'react-native';

import {  Header,  LearnMoreLinks,  Colors,  DebugInstructions,  ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Axios from 'axios'
import store from '../assets/config/store'


export default class ResultsPage extends Component{

 
  render(){
    return(

      <View style={styles.container}>
        <View style={{width:wp('100%'), height:hp('50%')}}></View>
        
        <Text style={styles.textStyle}>Results Page</Text>
        <Text style={styles.textStyle2}>Food is: {store.subfoodchoosen}</Text>
        <Text style={styles.textStyle2}>Calorie: {store.calorie}</Text>
        <Text style={styles.textStyle2}>Fat: {store.fat}</Text>
        <Text style={styles.textStyle2}>Protein: {store.protein}</Text>
        <Text style={styles.textStyle2}>Sugars: {store.sugars}</Text>
        <Text style={styles.textStyle2}>Carbohydrate: {store.carbohydrate}</Text>
        
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textStyle: {
    fontSize: 50,
    alignSelf: 'center',
    marginBottom:8,
  },
  textStyle2: {
    fontSize: 22,
    marginTop:4,
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

