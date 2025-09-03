import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { createContext } from "react";
import main from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input,setInput] =useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompt, setPrevPrompt] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [resultData, setResultData] = useState("");
    const [loading, setLoading] = useState(false);
    
    const delayPara = (index, nextWord) =>{
        setTimeout(() => {
            setResultData((prev) => prev + nextWord);
        },75*index);
    }

    const newChat = () => {
        setLoading(false);
        setShowResult(false);
    }

    const onSent = async (prompt) =>{
        setResultData("");
        setLoading(true);
        setShowResult(true);
        let response;
        if(prompt != undefined){
            response= await main(prompt);
            setRecentPrompt(prompt);
        }else{
            setPrevPrompt(prev=>[...prev,input]);
            setRecentPrompt(input);
            response= await main(input);
        }
        let responseArray = response.split("**");
        let newResponse="";
        for(let i=0;i<responseArray.length;i++){
            if(i===0 || i%2 !==1){
                newResponse+= responseArray[i];
            }else{
                newResponse+= "<b>"+responseArray[i]+"</b>";
            }
        }
        let nR2=newResponse.split("*").join("</br>");
        let nRA=nR2.split("  ");
        for(let i=0;i<nRA.length;i++){
            const nextWord = nRA[i]+" ";
            delayPara(i,nextWord);
        }
        // setResultData(nR2);
        setLoading(false);
        setInput("");

    }

    // onSent("What is React Js?")
    const contextValue = {
        prevPrompt,
        setPrevPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        loading,
        setLoading,
        input,
        setInput,
        showResult,
        setShowResult,
        resultData,
        setResultData,
        newChat
    } 


    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;