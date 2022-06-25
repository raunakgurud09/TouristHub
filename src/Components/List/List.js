import React, { useEffect, useState } from "react";
import "./list.css";

import MiniCard from "./MiniCard";

import { StyledButton } from "./button.style";
import { getHotelData } from "../../API/Hotels";

function List() {
  const [hotels, setHotels] = useState([]);
  const [coordinates, setCoordinates] = useState({});

  navigator.geolocation.getCurrentPosition(function (position) {
    setCoordinates({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  });
  // console.log(coordinates);

  useEffect(() => {
    getHotelData(coordinates).then((data) => setHotels(data));

    // console.log(hotels);
  }, []);

  
  


  return (
    <div className="page">
      <div className="side-list">
        <div className="side-list-header">
          <h2>Places around you</h2>
          <div className="list-btn">
            <StyledButton>Food</StyledButton>
            <StyledButton>Hotel</StyledButton>
            <StyledButton>Travel</StyledButton>
          </div>
        </div>
        <div className="featured-inshort scroll">
          {hotels?.map((hotel) => (
            <MiniCard
              imageURL={hotel?.photo?.images?.small?.url}
              name={hotel?.name}
              rating={hotel?.rating}
              availablePlaces={hotel?.neighborhood_info}
            />
          ))}

        </div>
      </div>
    </div>
  );
}

export default List;
