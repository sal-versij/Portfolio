import App from './App.svelte';

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyDfyxXfX_cF_7h5UvhsvHMBGSIDHqXF8bw',
	authDomain: 'portfolio-e2d82.firebaseapp.com',
	projectId: 'portfolio-e2d82',
	storageBucket: 'portfolio-e2d82.appspot.com',
	messagingSenderId: '544371326634',
	appId: '1:544371326634:web:a8bc603d7187ef5b37dad3',
	measurementId: 'G-R9LC54MTS3',
};

const app = new App({
	target: document.body,
	props: {
		app: initializeApp(firebaseConfig),
	},
});

export default app;
