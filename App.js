import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import {Provider} from "react-redux";

// import {useState} from "react";

// import * as Font from "expo-font";
// import { AppLoading } from "expo";

import {store} from "./redux/store";
import { useRoute } from './route';
import db from "./config";
// const loadApplication = async () => {
//   await Font.loadAsync({
//     "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
//   });
// };


export default function App () {

  const [user, setUser] = useState(null);
  const routing = useRoute(user);
  // const [iasReady, setIasReady] = useState(false);

  // if (!iasReady) {
  //   return (
  //     <AppLoading
  //       startAsync={loadApplication}
  //       onFinish={() => setIasReady(true)}
  //       onError={console.warn}
  //     />
  //   );
  // }  

  db.auth().onAuthStateChanged((user) => setUser(user));

  return (
    <Provider store={store}>
      <NavigationContainer>
        {routing}
      </NavigationContainer>
    </Provider>    
  )
}

