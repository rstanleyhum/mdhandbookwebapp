import * as firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

import firebaseConfig from '../assets/firebase.secret';

firebase.initializeApp(firebaseConfig);

export default firebase;
