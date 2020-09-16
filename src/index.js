import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { initFirebase } from './firebase'

const init = async () => {
    await initFirebase()

    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    )

    serviceWorker.register()
}

init().then(() => console.log('App initialized 🚀')).catch(() => console.log('An error occurred 😢'))
