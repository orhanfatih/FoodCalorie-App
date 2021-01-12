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

import { Header,  LearnMoreLinks,  Colors,  DebugInstructions,  ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Axios from 'axios'


export default class SubFood extends Component{
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
    
    Axios.get('http://10.0.2.2:8000/api/detail/', {

  }, 
    headers
    ).then(function (result){
      console.log('REESesult:' , result.data)
      that.setState({first: result.data[0]})
      that.setState({second: result.data[1]})
      that.setState({third: result.data[1]})
    }).catch((err) => {
      console.log('CAATCcathc err:', JSON.stringify(err))
    })
  }
  render(){
    return(

      <View style={styles.container}>
        <View style={{width:wp('100%'), height:hp('60%')}}>

        </View>
        <Text style={styles.textStyle}>
            SUBFOOODDD PAGE
        </Text>
        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('SubFood')
        }} style={styles.textStyle}>{this.state.first}</TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.getExample()
          console.log('first state: ', this.state.first)
          //this.props.navigation.navigate('MainFood')
        }}  style={{backgroundColor:'yellow'}}>
          <Text>GET RESULTS</Text>
        </TouchableOpacity>
        <View>
      {this.state &&
        <Text>
          Results: {this.state.first}
        </Text>
      }
    </View>
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

