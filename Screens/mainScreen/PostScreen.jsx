import  React , { useState, useEffect }   from "react";
import { 
  View, 
  Text, 
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList, } from "react-native";
import { MaterialIcons,AntDesign} from "@expo/vector-icons";

  export default function  PostScreen ({route,navigation}){
  const [posts, setPosts] = useState([]); 

  useEffect(() => {    
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View></View>
        <Text style={styles.title}>Публикации</Text>
        <TouchableOpacity onPress={()=>navigation.popToTop()}>
          <MaterialIcons name="logout" size={24} color="#BDBDBD"/>          
        </TouchableOpacity>   
      </View>
      <View style={styles.user}>
        <Image source={require("../../images/Rectangle.jpg")} style={styles.avatar}/>
        <View>
          <Text >Natali Romanova</Text>
          <Text style={styles.useremail}>email@example.com</Text>
        </View>         
      </View>
        <SafeAreaView>
          <FlatList
            data={posts}
            keyExtractor={(indx) => indx.toString()}            
            renderItem={({ item }) =>              
            <View style={styles.content}>
              <Image source={{uri:item.photo}} style={{ height: 240, width: 343,borderRadius: 8 }}/> 
              <Text style={styles.titel}>{item.name}</Text>
              <View style={styles.statistic}>
              <View style={styles.flex}>
                <TouchableOpacity 
                  style={styles.flex}
                  onPress={()=>navigation.navigate("ComentScreen")}
                >
                  <AntDesign name="aliwangwang-o1" size={24} color="#BDBDBD" />                  
                  <Text>{item.coment ||'  0'}</Text>
                </TouchableOpacity>                  
              </View>
                <View style={styles.flex}>
                  <AntDesign name="enviromento" size={24} color="#BDBDBD" />
                  <Text>{item.place}</Text>  
                </View>                               
              </View>                
            </View>              
            }            
          />
        </SafeAreaView>
     </View>             
   
  );
};

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

    user:{
      flexDirection: "row",
      marginTop:32,
      marginLeft:16,
      alignItems: "center",
    },

    useremail:{
      color: 'rgba(33, 33, 33, 0.8)',

    },

    avatar:{      
      width:60,
      height:60, 
      marginRight:8,
      borderRadius: 16,  
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
    titel:{
      margin:0,
  
      },

  });
  
