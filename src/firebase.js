import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/performance'

const config = {
    apiKey: 'AIzaSyD7X4TmBX7S-o20UQ21drancoKUZ7TCO_4',
    authDomain: 'tinder-clone-5e692.firebaseapp.com',
    databaseURL: 'https://tinder-clone-5e692.firebaseio.com',
    projectId: 'tinder-clone-5e692',
    storageBucket: 'tinder-clone-5e692.appspot.com',
    messagingSenderId: '327048436194',
    appId: '1:327048436194:web:3a16738dfa6311ab9981bb',
    measurementId: 'G-0QNLB0FZTD'
}

const initFirebase = async () => {
    await firebase.initializeApp(config)
    await firebase.performance()
    if (await firebase.analytics.isSupported()) await firebase.analytics()
}

export { initFirebase }
