import React from 'react';
import './TourDetails.css';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
export default function TourDetails(props) {
    const [isShown,setShown] = useState(false);
    function clickhandle(){
        setShown(!isShown)
    }
    let { id } = useParams();
    let infoData = props.data.filter(element => element.id == id)  
    return (
        <>
            <Header />
            <div >

            <p >{infoData[0].id}</p>
            <p > {infoData[0].name} </p> 
             <p >
             {isShown ? infoData[0].info : `${infoData[0].info.substring(0, 100)}`}
             {isShown? <button onClick={clickhandle}>see less</button>:<button onClick={clickhandle}>see more</button> } 
             </p>
   
            <p> {infoData[0].price}</p>
            <img  src={infoData[0].image} />
            </div>

            <Footer/>
        </>
    )
}