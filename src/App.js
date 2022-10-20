import React, { useEffect, useState } from "react";
import Card from "./Components/Card";
import Dropdown from "./Components/Dropdown";
import './App.css'

function App() {
  const [country, setCountry] = useState([]);
  const [countryName, setCountryName] = useState("Select a Country");
  // const [state, setState] = useState([]);
  // const [stateName, setStateName] = useState("");
  // const [confirmed, setConfirmed] = useState(0);

  // First useEffect hook is to create a dropDown menu consiting of countries

  useEffect(() => {
    const getCountryData = async () => {
      const res = await fetch(
        "https://covid-api.mmediagroup.fr/v1/cases?country"
      );
      const resData = await res.json();
      const keys = Object.keys(resData);
      setCountry(keys);
    };
    getCountryData();
  }, []);

  // This function is used to generate the name of the countries and updating it with the help of setId function 

  const countryHandler = (event) => {
    const countryDropDown = event.target.value;
    // console.log(countryDropDown);
    setCountryName(countryDropDown);
  };

  // Second useEffect hook is to create a dynamic drop down menu consiting of states of every country and we want it to update 
  // only when the state in the dropdown menu for country changes ie when the selected country changes so that's why we pass the
  // the name of country in the dependency array as well to change the drop down menu for state with every change in the selected
  // country
  // useEffect(() => {
  //   const getState = async () => {
  //     const res = await fetch(
  //       `https://covid-api.mmediagroup.fr/v1/cases?country=${countryName}`
  //     );

  //     const resData = await res.json();
  //     const states = Object.keys(resData);
  //     // console.log(states);
  //     setState(states);

  //     // if(stateName === "All") {
  //     //   setConfirmed(countryName.All.confirmed);
  //     // }
  //     // else {
  //     //   setConfirmed(stateName.confirmed);
  //     // }

  //   };
  //   getState();
  // }, [countryName]);

  // const stateHandler = (event) => {
  //   const stateDropDown = event.target.value;
  //   console.log(stateDropDown);
  //   setStateName(stateDropDown);
  // }

  return (
    <div className="App container">
      <Dropdown
        generateCountry={countryHandler}
        countryValue={country}
      />
      <Card displayCountry = {countryName} />
    </div>
  );
}

export default App;
