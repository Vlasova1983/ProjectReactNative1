
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions, 
  
} from "react-native";
import { AntDesign} from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import {authSignUpUser} from "../../redux/auth/authOperetions";

const initialState = {
  nickname:"",
  email: "",
  password: "",
};

export default function  RegistrationScreen ({navigation}) { 
  const dispatch = useDispatch();

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const [dimensions, setdimensions] = useState(
    Dimensions.get("window").width 
  );
  const [showPassword,setShowPassword]=useState(true);

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

  const handleSubmit = () => {   
    dispatch(authSignUpUser(state))   
    setState(initialState);     
  };

  const keyboardHide=()=>{
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };
  
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../../images/Photo.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >                       
            <View
              style={{
                ...styles.form,
                marginBottom: isShowKeyboard ? 32 : 0,
                width: dimensions,
              }}
            >
              <View style={styles.fon}> 
                <View style={styles.avatar}>
                  <View></View>
                  <AntDesign name="pluscircleo" size={24} color={"#FF6C00"} style={styles.choiceFoto}/>                   
                </View>                                  
                <View style={styles.header}>
                  <Text style={styles.headerTitle}>Регистрация</Text>                
                </View>
                <View >                
                  <TextInput
                    style={styles.input}                    
                    onFocus={() => setIsShowKeyboard(true)}
                    value={state.nickname}
                    placeholder = "Логин"
                    onChangeText={(value) =>
                      setState((prevState) => ({ ...prevState, nickname: value}))
                    }
                  />
                </View>
                <View style={{marginTop:16, marginBottom:16 }}>                
                  <TextInput
                    style={styles.input}                    
                    onFocus={() => setIsShowKeyboard(true)}
                    value={state.email}
                    placeholder = "Адрес электронной почты"
                    onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value}))
                    }
                  />
                </View>
                <View>                
                  <TextInput
                    style={styles.input}                    
                    secureTextEntry={showPassword}
                    onFocus={() => setIsShowKeyboard(true)}
                    placeholder = "Пароль"
                    value={state.password}                  
                    onChangeText={(value) =>
                      setState((prevState) => ({ ...prevState, password: value }))
                    }
                  /> 

                  <View style={styles.show}>
                    <TouchableOpacity
                      onPress={()=>showPassword===true?setShowPassword(false):setShowPassword(true)}
                    >
                      <Text style={styles.btnEnt}>Показать</Text>
                    </TouchableOpacity>                   
                  </View>    
                <View>
                </View>                
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.btn}
                    onPress={handleSubmit}
                  >
                  <Text style={styles.btnTitle}>Зарегистрироваться</Text>
                  </TouchableOpacity>
                </View>                 
                <View>                  
                  <TouchableOpacity
                    activeOpacity={0.8}                
                    onPress={() => navigation.push('Login')}
                  >
                   <Text style={styles.btnEnt}>Уже есть аккаунт? Войти</Text>
                  </TouchableOpacity> 
                </View>
              </View>            
           </View> 
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

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

  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    height: 50,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",    
    paddingLeft: 16,
    marginHorizontal: 16,
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
        borderColor: "#FF6C00",
      },
      android: {
        backgroundColor: "#FF6C00",
        borderColor: "transparent",
      },
    }),
  },
  btnTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    // fontFamily: "Roboto-Black",
  },

  btnEnt:{    
    color: "#1B4371",
    textAlign: "center",
  },

  show:{
    position: 'absolute',
    top:16,
    right:32,
  },

  choiceFoto:{
    marginTop:80,
    marginLeft:110,
    width:25,
    height:25,   
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
  
  header: {
    alignItems: "center",
    marginBottom: 33,    
    marginTop: 92,
  },
  headerTitle: {
    fontSize: 30,
    color: "#212121",
    lineHeight: 35,
    // fontFamily: "Roboto-Black",
  },
});
