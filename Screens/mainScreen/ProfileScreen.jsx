import React, { useState, useEffect } from "react";
import { 
  View, 
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Dimensions,
  SafeAreaView,
  FlatList,
  TouchableOpacity
} from "react-native";
import {COURSES} from './data';
import {MaterialIcons, AntDesign} from "@expo/vector-icons";

export default function ProfileScreen ({navigation})  {

  const [courses, setCourses] = useState(COURSES);
  const [dimensions, setdimensions] = useState(
    Dimensions.get("window").width 
  );
  
  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width;
      setdimensions(width);      
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../images/Photo.jpg")}
      >
        <View style={{
                ...styles.fon,                
                width: dimensions,
              }}>          
          <Image source={require("../../images/Rectangle.jpg")} style={styles.avatar}/>
          <TouchableOpacity style={styles.btn} onPress={()=>navigation.popToTop()}>
            <MaterialIcons name="logout" size={24} color="#BDBDBD"/> 
          </TouchableOpacity>          
          <Text style={styles.nik}>Natali Romanova</Text>
          <SafeAreaView>
            <FlatList
              data={courses}
              renderItem={({ item }) =>              
              <View style={styles.content}>
                <Image source={require("../../images/fors.jpg")} style={styles.loadFoto}/> 
                <Text style={styles.titel}>{item.title}</Text>
                <View style={styles.statistic}>
                <View style={styles.flex}>
                  <View style={styles.flex}>                    
                    <AntDesign name="aliwangwang" size={24} color="#FF6C00" />
                    <Text>8</Text>
                  </View>
                  <View style={styles.flex}>
                    <AntDesign name="like2" size={24} color="#FF6C00" />
                    <Text>183</Text>
                  </View>                  
                </View>
                  <View style={styles.flex}>
                    <AntDesign name="enviromento" size={24} color="#BDBDBD" />
                    <Text>Ukraine</Text>  
                  </View>                               
                </View>                
              </View>              
              }
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
        </View>         
      </ImageBackground>            
     </View> 
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,    
    },

    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "flex-end",
      alignItems: "center",
    },

    fon: {
      backgroundColor: "#FFFFFF",
      borderTopLeftRadius: 25,
      borderTopRightRadius:25,
      paddingBottom:78,     
    },

    btn:{
      paddingTop:24,
      paddingRight:12,
      alignItems: "flex-end",
    },

    avatar:{
      position: 'absolute',
      top: -60,
      left: Dimensions.get("window").width/2-60,
      backgroundColor: "#F6F6F6",
      borderRadius: 8,
      height: 120,
      width: 120,      
    },

    nik:{
      fontSize: 30,
      paddingTop:92,
      textAlign: "center",
    },

    content:{
      paddingTop:33,
      paddingBottom:2,
      alignItems: "center",
    },

    statistic:{
      flexDirection: "row",      
      justifyContent:"space-between",
      width:340,
      paddingTop:11, 
      marginRight:-27,     
    },

    flex:{
      flexDirection: "row",
      marginRight:27,
    },

    loadFoto:{ 
      backgroundColor: "#F6F6F6",   
      width: 343,
      height: 240,
      justifyContent:"center",
      borderRadius: 8,
      alignItems: "center",
    }, 
    titel:{
    margin:0,
    },
  });
  
