import React from "react";

export function Rating(props:any) {

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

function Star(props:any) {

    if(props.selected){
        return <div><b>star</b></div>
    }
    return <div>star</div>
}