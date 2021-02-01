import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';

import MyHeader from '../components/MyHeader';

export default class BookDonateScreen extends Component{
  constructor(){
    super()
    this.state = {
      requestedBooksList : []
    }
  this.requestRef= null
  }


  getRequestedBooksList =()=>{
    
  }


  componentDidMount(){
    this.getRequestedBooksList()
  }


  componentWillUnmount(){
    this.requestRef();
  }


  keyExtractor = (item, index) => index.toString()

  renderItem = ( {item, i} ) =>{
   
  }

  render(){
    return(
      <View style={{flex:1}}>
        <MyHeader title="Donate Books"/>
        <View style={{flex:1}}>
         
         
        </View>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  subContainer:{
    flex:1,
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     }
  }
})
