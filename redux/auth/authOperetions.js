import db from "../../config";

export const authSignUpUser = ({nickname, email, password}) => async (
  dispatch,   
  getState) => {    
  try{
    const user = await db
    .auth()
    .createUserWithEmailAndPassword(email,password);     
  }catch(error){   
    console.log('error.massege',error.massege)
  }
};

export const authSignInUser = ({ email, password }) => async (
  dispatch,
  getState) => {
  try {
    const user = await db
    .auth()
    .signInWithEmailAndPassword(email, password);
    console.log("user", user);
  } catch (error) {
    console.log("error", error);
    console.log("error.code", error.code);
    console.log("error.message", error.message);
  }
};
const authSignOutUser = () => async (dispatch, getState) => {};





// const registerDB = async () => {
//     try {
//       await auth.createUserWithEmailAndPassword("emai", "password");
//     } catch (error) {
//       throw error;
//     }
//   };

//   const authStateChanged = async () => {
//     try {
//       await auth.onAuthStateChanged((user) => setIsAuth(user));
//     } catch (error) {
//       throw error;
//     }
//   };

//   const loginDB = async () => {
//     try {
//       await auth.signInWithEmailAndPassword("emai", "password");
//     } catch (error) {
//       throw error;
//     }
//   };

//   const getCurrentUserInfo = async () => {

//     const user = await auth.currentUser;
  
//     // если такой пользователь найден
//     if (user) {
  
//     // обновляем его профайл
//       user.updateProfile({
//         displayName: "Bob",
//         photoURL: "https://example.com.jpg",
//       });
//     }
//   };