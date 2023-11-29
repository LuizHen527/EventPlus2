import logo from './logo.svg';
import './App.css';
import { UserContext } from './context/AuthContext';

import Rotas from "./routes"
import { useState } from 'react';


const App = () => {

    const [userData, setUserData] = useState({});

    return (
        <UserContext.Provider value={{userData, setUserData}}>
            <Rotas />
        </UserContext.Provider>
        
        
    )

}

export default App;
