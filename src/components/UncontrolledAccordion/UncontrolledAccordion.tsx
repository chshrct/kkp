import React, {useState} from "react";

type AccordionPropsType = {
    title:string
}


export function UncontrolledAccordion(props: AccordionPropsType) {
    const [collapsed,setCollapsed]=useState(false)
    return <>
        <AccordionTitle title={props.title}  setCollapsed={setCollapsed} collapsed={collapsed}/>
        {!collapsed && <AccordionBody/>}
    </>
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed:(a:boolean)=>void
    collapsed:boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={()=>props.setCollapsed(!props.collapsed)}>{props.title}</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}