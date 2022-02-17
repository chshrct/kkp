import React from "react";

type RatingPropsType ={
    value:0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(props:RatingPropsType) {

    return <>
        <Star selected={props.value>0}/>
        <Star selected={props.value>1}/>
        <Star selected={props.value>2}/>
        <Star selected={props.value>3}/>
        <Star selected={props.value>4}/>
    </>

}
type StarPropsType={
    selected:boolean
}
function Star(props:StarPropsType) {

    if(props.selected){
        return <div><b>star</b></div>
    }
    return <div>star</div>
}