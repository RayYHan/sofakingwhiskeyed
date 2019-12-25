import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

import './whiskey-shelf.js';

window.addEventListener('load', () => {
  getDrinks();
})

async function getDrinks() {
  firebase.initializeApp({
    storageBucket: "sofakingwasted-e795e.appspot.com",
    projectId: "sofakingwasted-e795e",
    databaseURL: "sofakingwasted-e795e.firebaseio.com",
  });
  const storage = firebase.storage();
  const firestore = firebase.firestore();
  let whiskey_ref = firestore.collection('whiskeys');
  let snapshot = await whiskey_ref.get();

}
