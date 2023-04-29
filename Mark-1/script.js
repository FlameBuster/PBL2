import {useReducer, useState} from 'react'; 



const [input,setInput]=useState("");
const [chatlog,setChatlog]=useState([]);

async function handlesubmit(e){
    e.preventDefault();
    setChatlog([...chatlog,{user:"me",message:'${input}'}])
    setInput("");
}

function UpdateInput(){
    setInput(input)=e.target.value
}