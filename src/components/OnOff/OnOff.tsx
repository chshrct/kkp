import s from './OnOff.module.css'
import {useState} from "react";

type OnOffPropsType = {
    isOn: boolean
    setIsOn: (v: boolean) => void
}

export function OnOff(props: OnOffPropsType) {
    return <div className={s.wrapper}>
        <div onClick={() => props.setIsOn(true)}
             className={s.btn + ' ' + (props.isOn && s.green)}>
            On
        </div>
        <div onClick={() => props.setIsOn(false)}
             className={s.btn + ' ' + (!props.isOn && s.red)}>
            Off
        </div>
        <div onClick={() => props.setIsOn(!props.isOn)}
             className={s.circle + ' ' + (props.isOn && s.green) + ' ' + (!props.isOn && s.red)}>
        </div>
    </div>
}