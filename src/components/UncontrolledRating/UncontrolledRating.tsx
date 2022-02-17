import React, {useState} from "react";



export function UncontrolledRating() {
const [rate,setRate] =useState(0)
    return <>
        <Star selected={rate>0} setRate={setRate} starId={1}/>
        <Star selected={rate>1} setRate={setRate} starId={2}/>
        <Star selected={rate>2} setRate={setRate} starId={3}/>
        <Star selected={rate>3} setRate={setRate} starId={4}/>
        <Star selected={rate>4} setRate={setRate} starId={5}/>
    </>

}
type StarPropsType={
    selected:boolean
    setRate:(a:number)=>void
    starId:number
}
function Star(props:StarPropsType) {

    if(props.selected){
        return <div onClick={()=>props.setRate(props.starId)}><b>star</b></div>
    }
    return <div onClick={()=>props.setRate(props.starId)}>star</div>
}