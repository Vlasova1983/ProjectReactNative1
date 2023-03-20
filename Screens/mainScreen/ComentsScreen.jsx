import React,{ useState } from "react";
import { View, Text,TouchableOpacity,StyleSheet,TextInput,Image } from "react-native";
import { AntDesign,Entypo } from '@expo/vector-icons';

export default function  ComentScreen ({navigation}) {
    const [coment, setComent] = useState('');
    const [text, setText ] =  useState('');
  
    const onChangeComent=() => {
        setText(coment);
        setComent('');            
    }


    return (        
        <View style={styles.container}>      
            <View style={styles.header}>                
                <TouchableOpacity  onPress={() => navigation.navigate("Публикации")}>
                    <AntDesign name="arrowleft" size={24} color="#BDBDBD" />
                </TouchableOpacity>           
                <Text style={styles.title}>Комментарии</Text>
                 <View></View>            
            </View>
            <View style={styles.content}>
                <Image source={require("../../images/fors.jpg")} style={styles.loadFoto}/>
                <View style={styles.box}>
                    <Text>{text.value}</Text>
                    <Text style={{ marginTop:8, color:'#BDBDBD'}}>09 июня, 2020 | 08:40</Text>
                </View> 
            </View>               
                <View >                
                    <TextInput
                        style={styles.input}                    
                        // onFocus={() => setIsShowKeyboard(true)}
                        value={coment}
                        placeholder = "Комментировать..."
                        onChangeText={(value) =>
                        setComent((prevState) => ({ ...prevState,  value}))
                        }
                    />
                    <View style={styles.show}>
                        <TouchableOpacity
                            onPress={onChangeComent}
                        >
                            <Entypo name="arrow-with-circle-up" size={34} color="#FF6C00" />
                        </TouchableOpacity>                   
                    </View>         
                </View>   
            
        </View>
          
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,    
      backgroundColor:'#FFFFFF',     
    },

    header:{      
      alignItems: "center",  
      flexDirection: "row",      
      justifyContent:"space-between",
      paddingRight:10,       
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
    content:{
        paddingTop:33,
        paddingBottom:2,
        alignItems: "center",
      },
    
    input: {
        borderWidth: 1,
        borderColor: "#E8E8E8",
        height: 50,
        borderRadius: 100,
        paddingLeft: 16,   
        fontSize: 16,
        marginHorizontal: 16,
        alignContent:"flex-end",             
      },

    show:{
        position: 'absolute',
        top:8,
        right:32,
    }, 

    box:{
        backgroundColor:'rgba(0, 0, 0, 0.03)',
        borderTopLeftRadius: 6,
        borderTopRightRadius:0,
        borderBottomStartRadius: 6,
        borderBottomEndRadius:6,
        width:300,
        marginBottom:24,
        marginTop:32,
        padding:15,
    },

    loadFoto:{ 
        backgroundColor: "#F6F6F6",   
        width: 343,
        height: 240,
        justifyContent:"center",
        borderRadius: 8,
        alignItems: "center",
      }, 
  });
  