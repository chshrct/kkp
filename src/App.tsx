import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return <>
        <AppTitle title={'tihs is app component'}/>
        <Rating value={5}/>
        <Accordion title={'Menu'} collapsed={true}/>
        <Accordion title={'Users'} collapsed={false}/>
    </>
}

type AppTitlePropsType={
    title:string
}

function AppTitle(props:AppTitlePropsType) {
    return <div>
        {props.title}
    </div>
}

export default App;
