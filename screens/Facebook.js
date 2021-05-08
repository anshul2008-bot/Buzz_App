import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default class Instagram extends React.Component{
    render(){
        return(
           <TouchableOpacity><View>
           <Text style={{marginLeft:600, marginTop:100, fontSize:100}}>Facebook</Text>
       </View></TouchableOpacity>
           
        );
    }
}