import React from "react";

type RatingPropsType ={
    value:0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(props:RatingPropsType) {

    if(props.value === 1){
        return <>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </>
    }
    if(props.value === 2){
        return <>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </>
    }
    if(props.value === 3){
        return <>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </>
    }
    if(props.value === 4){
        return <>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
        </>
    }
    if(props.value === 5){
        return <>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
        </>
    }
    return <>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
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