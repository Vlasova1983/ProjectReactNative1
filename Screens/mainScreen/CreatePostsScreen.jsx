import React, {useState,useEffect} from "react";
import { View, Text, StyleSheet,TextInput,Image,TouchableOpacity } from "react-native";
import {Camera} from 'expo-camera';
// import * as MediaLibrary from "expo-media-library";
import * as Location from 'expo-location';
import {AntDesign} from "@expo/vector-icons";


export default function CreatePosteScreen ({navigation}) {
  // const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');

  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Camera.requestCameraPermissionsAsync();
  //     await MediaLibrary.requestPermissionsAsync();

  //     setHasPermission(status === "granted");
  //   })();
  // }, []);

  // if (hasPermission === null) {
  //   return <View />;
  // }
  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }

  const takeFoto = async () => {
    const photo = await cameraRef.takePictureAsync();
    setPhoto(photo.uri);
    

    // if (cameraRef) {
    //   const { uri } = await cameraRef.takePictureAsync();
    //   await MediaLibrary.createAssetAsync(uri);
    //   setPhoto(photo);               
    // }
  }

  const sendPost=()=>{   
    navigation.navigate("Публикации",{photo,name,place});
    setName('');
    setPlace('');
    setPhoto(null);
    // setHasPermission(null);
    setCameraRef(null);
  };


  return (        
    <View style={styles.container}>      
      <View style={styles.header}>
        <TouchableOpacity  onPress={() => navigation.navigate("Публикации")}>
          <AntDesign name="arrowleft" size={24} color="#BDBDBD" />
        </TouchableOpacity>           
        <Text style={styles.title}>Создать публикацию</Text>
        <View></View>
      </View>
      <View style={styles.context}> 
        <Camera style={styles.loadFoto}          
           ref={(ref) => {
             setCameraRef(ref);
           }}
          >
          {photo && (
            <View style={styles.takePhotoContainer}>
              <Image 
                source={{ uri: photo }}
                style={{ height: 240, width: 343 }}
              />
            </View>
          )}         
          <TouchableOpacity onPress={takeFoto} >
            <Image style={styles.dofoto} source={require("../../images/dofoto.jpg")} />
          </TouchableOpacity>         
        </Camera>
      </View> 
      <TouchableOpacity style={styles.btnClickLoadFoto}>
        <Text style={styles.btnTitle} >Загрузите фото</Text>            
      </TouchableOpacity> 
      <View style={styles.form}>
        <TextInput
          style={styles.input}          
          value={name}
          placeholder = "Название..."
          onChangeText={(value) =>{            
            setName(value);            
          }}
        />       
        <View>
          <TextInput
            style={styles.input}          
            value={place}
            placeholder = "Местность..."
            onChangeText={(value) =>{
              setPlace(value)
            }}
          />
          <TouchableOpacity>
            <AntDesign name="enviromento" size={24} color="#BDBDBD" style={styles.map}/>            
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btn} 
          onPress={sendPost}
          >          
          <Text style={styles.btnTitle}>Опубликовать</Text>
        </TouchableOpacity>
        </View>       
    </View>     
  )  
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#FFFFFF', 
    },    

    takePhotoContainer:{
      position: "absolute",
      top: 0,
      left: 0,
      borderColor: "#fff",
      borderWidth: 1,
    },

    header:{      
      alignItems: "center",  
      flexDirection: "row",      
      justifyContent:"space-between",
      paddingLeft:10,       
      borderColor:"#E8E8E8",
      borderBottomWidth:1,
      marginTop:0,
      paddingTop:0,
    },

    title:{
      fontSize: 17,
      lineHeight: 22,
      paddingBottom: 11,     
    },

    context:{
      alignItems: "center",
      marginTop:32,
      marginBottom:8,
    },

    loadFoto:{
      backgroundColor:'#E8E8E8',
      width: 343,
      height: 240,
      justifyContent:"center",
      borderRadius: 8,
      alignItems: "center",
    }, 

    dofoto:{
      alignItems: "center",
      borderRadius: 100,
    },

    form:{
      marginTop:48,
    }, 

    input: {
      borderBottomWidth:1,
      borderColor: "#E8E8E8",
      height: 50,        
      fontSize: 16,
      marginHorizontal: 16,
      paddingLeft:32,
    },
    btn: {
      borderRadius: 100,
      borderWidth: 1,
      height: 51,
      marginTop: 43,
      marginBottom: 16,
      
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 20,
      ...Platform.select({
        ios: {
          backgroundColor: "transparent",
          borderColor: "#F6F6F6",
        },
        android: {
          backgroundColor: "#F6F6F6",
          borderColor: "transparent",
        },
      }),
    },

    btnClickLoadFoto:{
      marginLeft:16,
    },

    btnTitle:{    
      color:"#BDBDBD", 
      fontSize: 16,    
    },
    map:{
      position: 'absolute',
      top:-35,
      left:15,
    },
  });
  
