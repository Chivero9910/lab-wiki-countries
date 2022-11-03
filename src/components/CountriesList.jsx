import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList(props) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: '90vh', overflow: 'scroll' }}
          >
            <div className="list-group">
              {props.countriesList.map((eachCountry) => {
                return (
                  <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}
                  key={eachCountry.alpha3Code}>
                  <div className="list-group">
                    <Link
                      to={`/${eachCountry.alpha3Code}`}
                      className="list-group-item list-group-item-action"
                    >
                      <img
                        src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`}
                        alt=""
                        width="20px"
                      />
                      {eachCountry.name.official}
                    </Link>
                  </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
