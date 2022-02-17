import s from './OnOff.module.css'
import {useState} from "react";
type OnOffPropsType={
    isOn:boolean
}

export function OnOff(props:OnOffPropsType){
    const [isOn,setIsON]=useState(props.isOn)
    return<div className={s.wrapper}>
        <div onClick={()=>setIsON(true)} className={s.btn  + ' ' + (isOn && s.green)}>On</div>
        <div onClick={()=>setIsON(false)} className={s.btn + ' ' + (!isOn && s.red)}>Off</div>
        <div onClick={()=>setIsON(!isOn)} className={s.circle + ' ' + (isOn && s.green) + ' ' + (!isOn && s.red)}></div>
    </div>
}