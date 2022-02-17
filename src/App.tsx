import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";

function App() {

    const [rate,setRate]=useState<0 | 1 | 2 | 3 | 4 | 5>(0)
    const [collapsed,setCollapsed]=useState<boolean>(false)
    const [isOn,setIsOn]=useState<boolean>(false)
    return <>
        <AppTitle title={'tihs is app component'}/>
        <Rating rate={rate} setRate={setRate}/>
        {/*<UncontrolledRating/>*/}
        <Accordion title={'Menu'} collapsed={collapsed} setCollapsed={setCollapsed}/>
        <Accordion title={'Users'} collapsed={collapsed} setCollapsed={setCollapsed}/>
        {/*<UncontrolledAccordion title={'Menu'}/>*/}
        {/*<UncontrolledAccordion title={'Users'}/>*/}
        <OnOff isOn={isOn} setIsOn={setIsOn}/>
        <OnOff isOn={isOn} setIsOn={setIsOn}/>
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
