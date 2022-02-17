import React, {Dispatch, SetStateAction} from "react";

type RatingPropsType ={
    rate:0 | 1 | 2 | 3 | 4 | 5
    setRate:Dispatch<SetStateAction<0 | 1 | 2 | 3 | 4 | 5>>
}

export function Rating(props:RatingPropsType) {

    return <>
        <Star selected={props.rate>0} setRate={props.setRate} val={1}/>
        <Star selected={props.rate>1} setRate={props.setRate} val={2}/>
        <Star selected={props.rate>2} setRate={props.setRate} val={3}/>
        <Star selected={props.rate>3} setRate={props.setRate} val={4}/>
        <Star selected={props.rate>4} setRate={props.setRate} val={5}/>
    </>

}
type StarPropsType={
    selected:boolean
    val: 1 | 2 | 3 | 4 | 5
    setRate:Dispatch<SetStateAction<0 | 1 | 2 | 3 | 4 | 5>>
}
function Star(props:StarPropsType) {


        return <div onClick={()=>props.setRate(props.val)}>
            {props.selected?<b>star</b>:'star'}
                </div>

}