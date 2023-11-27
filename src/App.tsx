
import './App.css'
import {Provider} from "react-redux";
import {store} from "./services/store.ts";
import {Router} from "./services/routing.tsx";


function App() {

  return (
        <Provider store={store}>
            <Router />
        </Provider>

  )
}

export default App
