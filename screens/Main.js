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


export default class Main extends Component{
  state = {
    first: null,
    second: null,
    thirt: null,
  }

  // getExample = async () => {
  //   var that = this
  //   const headers = {
  //     'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>'
  //   };
    
  //   Axios.get('http://127.0.0.1:8000/api/image/', {

  // }, 
  //   headers
  //   ).then(function (result){
  //     console.log('REESesult:' , result.data)
  //     that.setState({first: result.data[0]})
  //     that.setState({second: result.data[1]})
  //     that.setState({thirt: result.data[1]})
  //   }).catch((err) => {
  //     console.log('CAATCcathc err:', JSON.stringify(err))
  //   })
  // }
  render(){
    return(

      <View style={styles.container}>
        <View style={{width:wp('100%'), height:hp('60%')}}>

        </View>
        <Text style={styles.textStyle}>
          bu bir deneme yazisiidir
        </Text>
        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('SubFood')
        }} style={styles.textStyle}>
          <Text>Go to subfood page</Text>
          </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          // this.getExample()
          this.props.navigation.navigate('MainFood')
        }}  style={{backgroundColor:'yellow'}}>
          <Text>TAKE PHOTO</Text>
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

