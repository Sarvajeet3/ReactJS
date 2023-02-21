import React from "react";
import {BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import Homepage from "./Homepage";
import Entrypage from "./Entrypage";
import Resultpage from "./Resultpage";


const App = () => (
    <Router>
        <Routes>
            <Route path="/" element="<Homepage/>"/>

        </Routes>
    </Router>
)

export default App;