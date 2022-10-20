import { useState, useEffect } from "react";
import "../CSS/Card.css";

const Card = (props) => {
  const [confirm, setConfirm] = useState(0);
  const [death, setDeaths] = useState(0);
  const [totalPop, setTotalPop] = useState(0);
  const [capital, setCapital] = useState("Select a country");
  const [expectancy, setExpectancy] = useState(0);

  useEffect(() => {
    const getConfirmed = async () => {
      const url = await fetch(
        `https://covid-api.mmediagroup.fr/v1/cases?country=${props.displayCountry}`
      );
      const data = await url.json();
    //   const capitalCity = Object.keys(data);
      setConfirm(data.All.confirmed);
      setDeaths(data.All.deaths);
      setTotalPop(data.All.population);
      setCapital(data.All.captial_city);
      setExpectancy(data.All.life_expectancy);
    };
    getConfirmed();
  }, [props.displayCountry]);

  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Country Name</h5>
              <p class="card-text">
                {props.displayCountry}
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Confirmed Cases</h5>
              <p class="card-text">
                {confirm}
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Confirmed Deaths</h5>
              <p class="card-text">
                {death}
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-5">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Total Population</h5>
              <p class="card-text">
                {totalPop}
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Capital City</h5>
              <p class="card-text">
                {capital}
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Life Expectancy</h5>
              <p class="card-text">
                {expectancy}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
