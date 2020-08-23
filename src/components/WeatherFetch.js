import React from 'react'

export default function WeatherFetch(props) {
  const{ location ,temperature } =props.data;
   // console.log(props);
    // then iterate this this.props.
    return (
        <div>
            <h2> 
                The temperature is :- 
                {temperature} </h2> 
                 
                <h2> And the city is :- 
                {location} </h2>
                
        </div>
    )
}