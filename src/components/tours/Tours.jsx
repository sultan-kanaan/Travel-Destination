import React from "react";
import './Tours.css'
const Tours = (props) => {
    return (

        <div >
            {
            props.data.map(data => {
                return (
                    <div >
                        <h3>Place :{data.name}</h3>
                        <img src={data.image} alt="" />
                    </div>
                )
            })
        }
        </div>
    )
};

export default Tours;