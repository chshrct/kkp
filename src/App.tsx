import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return <>
        <AppTitle/>
        <Rating/>
        <Accordion/>
    </>
}

function AppTitle() {
    return <div>
        this is App component
    </div>
}

export default App;
