import React from "react";

type AccordionPropsType = {
    title:string
    collapsed:boolean
    setCollapsed:(val:boolean)=>void
}


export function Accordion(props: AccordionPropsType) {
    return <>
        <AccordionTitle title={props.title} setCollapsed={()=>props.setCollapsed(!props.collapsed)} />
        {!props.collapsed && <AccordionBody/>}
    </>
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.setCollapsed}>{props.title}</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}