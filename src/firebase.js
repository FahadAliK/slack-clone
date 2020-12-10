import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
	apiKey: 'AIzaSyBnJnMksRZGZnnhFU4OHbi1pNFQHII9Ql4',
	authDomain: 'react-slack-2ce60.firebaseapp.com',
	databaseURL: 'https://react-slack-2ce60-default-rtdb.firebaseio.com',
	projectId: 'react-slack-2ce60',
	storageBucket: 'react-slack-2ce60.appspot.com',
	messagingSenderId: '679854515129',
	appId: '1:679854515129:web:857a3efec475b382124c68',
	measurementId: 'G-85KQP7031Q',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
