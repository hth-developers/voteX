import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Alert,
  ScrollView
} from 'react-native';

export default function Verify_C() {
  

 const [data, setdata] = useState([
  {id:1,  name: "Talha",   image:"https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",           count:+923039509454},
  {id:2,  name: "Hassaan",    image:"https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",       count:3039509454},
  {id:3,  name: "My Friend",       image:"https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg", count:3039509454} ,
  {id:4,  name: "Persona 4",   image:"https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",    count:3039509454} ,
  {id:5,  name: "Persona 5",   image:"https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",    count:3039509454} ,
])
 

  const clickEventListener = (name) => {
    Alert.alert('Message', name);
  }


    return (
      <View style={styles.container}>
        <FlatList 
          style={styles.contentList}
          columnWrapperStyle={styles.listContainer}
          data={data}
          keyExtractor= {(item) => {
            return item.name;
          }}
          renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.card} onPress={()=>clickEventListener(item.name)}>
              <Image style={styles.image} source={{uri: item.image}}/>
              <View style={styles.cardContent}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.count}>{item.count}</Text>
                <TouchableOpacity style={styles.followButton} onPress={()=>clickEventListener(item.name)}>
                  <Text style={styles.followButtonText}>Explore now</Text>  
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}}/>
      </View>
    );
  }


const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    backgroundColor:"#ebf0f7"
  },
  contentList:{
    flex:1,
  },
  cardContent: {
    marginLeft:20,
    marginTop:10
  },
  image:{
    width:90,
    height:90,
    borderRadius:45,
    borderWidth:2,
    borderColor:"#ebf0f7"
  },

  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 20,
    marginRight: 20,
    marginTop:20,
    backgroundColor:"white",
    padding: 10,
    flexDirection:'row',
    borderRadius:30,
  },

  name:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#3399ff",
    fontWeight:'bold'
  },
  count:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#6666ff"
  },
  followButton: {
    marginTop:10,
    height:35,
    width:100,
    padding:10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "white",
    borderWidth:1,
    borderColor:"#dcdcdc",
  },
  followButtonText:{
    color: "#dcdcdc",
    fontSize:12,
  },
});  