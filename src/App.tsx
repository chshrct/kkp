import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App() {

    const [rate,setRate]=useState<0 | 1 | 2 | 3 | 4 | 5>(0)

    return <>
        <AppTitle title={'tihs is app component'}/>
        <Rating rate={rate} setRate={setRate}/>
        {/*<UncontrolledRating/>*/}
        {/*<Accordion title={'Menu'} collapsed={true}/>*/}
        {/*<Accordion title={'Users'} collapsed={false}/>*/}
        <UncontrolledAccordion title={'Menu'}/>
        <UncontrolledAccordion title={'Users'}/>
        <OnOff isOn={true}/>
        <OnOff isOn={false}/>
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
