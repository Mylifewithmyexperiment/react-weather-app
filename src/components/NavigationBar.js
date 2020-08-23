import React from "react";

export default function NavigationBar(props) {
  return (
    <div className="row">
      <div className="col-md-6">
        <h2 className="title">Weather App</h2>
      </div>

      <div className="col-md-6">
        <form className="region" onSubmit={ (e) =>{ e.preventDefault();
     props.changeWeather(e)     
    }
             
        }  >
          <input
            className="box"
            placeholder="Enter your city"
            onChange={(e) => {
                props.changeInput(e.target.value);
             
            }}
          ></input>
        </form>
      </div>
    </div>
  );
}
