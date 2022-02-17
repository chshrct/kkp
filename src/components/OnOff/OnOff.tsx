import s from './OnOff.module.css'
import {useState} from "react";
type OnOffPropsType={
    isOn:boolean
}

export function OnOff(props:OnOffPropsType){
    const [isOn,setisON]=useState(props.isOn)
    return<div className={s.wrapper}>
        <div onClick={()=>setisON(true)} className={s.btn  + ' ' + (isOn && s.green)}>On</div>
        <div onClick={()=>setisON(false)} className={s.btn + ' ' + (!isOn && s.red)}>Off</div>
        <div onClick={()=>setisON(!isOn)} className={s.circle + ' ' + (isOn && s.green) + ' ' + (!isOn && s.red)}></div>
    </div>
}