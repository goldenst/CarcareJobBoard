import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
// Reducers
import notifyReducer from './reducers/notifyReducer';

const firebaseConfig = {
  apiKey: "AIzaSyBpWa8XJ9p7-jK0V-N-18m2ZEuEW6GYCTM",
  authDomain: "carcarejobs-fdc81.firebaseapp.com",
  databaseURL: "https://carcarejobs-fdc81.firebaseio.com",
  projectId: "carcarejobs-fdc81",
  storageBucket: "carcarejobs-fdc81.appspot.com",
  messagingSenderId: "819238424388",
  appId: "1:819238424388:web:4fd736fb1f7897c5"
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