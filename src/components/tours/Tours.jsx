import React from "react";
import './Tours.css'
import Tour from './tour/Tour';
import { Link } from 'react-router-dom';
const Tours = (props) => {
    return (

        <div >
            {
                props.data.map(element => {
                    return (

                        <Link to={`/city/${element.id}`}>
                            <Tour key={element.id} mydata3={element} />
                        </Link>
                    )
                })
            }
        </div>
    )
};

export default Tours;