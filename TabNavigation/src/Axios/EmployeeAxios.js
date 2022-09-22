import axios from "axios";
import React,{Component} from "react";
import {View, StyleSheet,Text, ActivityIndicator,FlatList } from "react-native";

export default class EmployeeAxios extends Component{

  constructor(){
    super();
    this.state ={loader :false,
    data : []
  }

  }
   getData(){
    this.setState({loader : true})
    axios.get('http://restapi.adequateshop.com/api/Metadata/GetEmployees').then(response=>response.data).then((response)=> 
    {
    
      if(response.length>0){
        this.setState({data : response})
      }
      console.log('Your axios response is' ,response)
      this.setState({loader : false})
    }).catch((error)=>{
     
      console.log('Error is', error)
      this.setState({loader : false})
    })
   }
   componentDidMount(){
      this.getData()
   }
    render(){
      const renderItem =({item})=>(
        <View style ={styles.itemContainer}>
          <Text style={{fontWeight : 'bold'}}>{item.Name}</Text>
          <Text>{item.City}</Text>
          <Text>{item.Address}</Text>
        </View>
      )
        return(
        <View style={styles.container}> 
        <ActivityIndicator size="small" color= "blue" animating = {this.state.loader}/>
            <Text style ={styles.textView} onPress={()=>this.getData()}>
                    Employees
            </Text>
            <FlatList style ={{width : '95%', marginTop :10}}
              data ={this.state.data}
              renderItem={renderItem}/>
            
        </View>
    )
    }
}

const styles = StyleSheet.create({
 
      container : {
      height :'100%',
      width :'100%',
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:'white'
    },
    
    textView :{
      fontSize :20,
      fontWeight:"bold",
      marginTop:5,
      color:'black'
      
    },
    
    itemContainer : {
      width : '100%',
      padding:10,
      backgroundColor :'lightgray',
      elevation :4,
      marginBottom:10
    }
  })
  