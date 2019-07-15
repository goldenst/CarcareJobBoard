import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
// Reducers
import notifyReducer from './reducers/notifyReducer';

const firebaseConfig = {
  apiKey: "AIzaSyAyTob7HaQ_DM6TiUjh8fOyqe4STdsE_FY",
  authDomain: "carcareboard.firebaseapp.com",
  databaseURL: "https://carcareboard.firebaseio.com",
  projectId: "carcareboard",
  storageBucket: "",
  messagingSenderId: "352560105365",
  appId: "1:352560105365:web:de107143f51e22fc"
};

// react redux firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore
// const firestore = firebase.firestore();
// const settings = {timestampsInSnapshots: true };
//   firestore.settings(settings)
// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase) // <- needed if using firestore
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer, // <- needed if using firestore
  notify: notifyReducer
});

// Create store with reducers and initial state
const initialState = {};
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);


export default store;