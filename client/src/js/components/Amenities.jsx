import React from 'react';

const Amenities = (props) => {
  let amenitiesListed = 0;
  const amenitiesList = props.data.map((item, i) => {
    if (item.contents[0] && amenitiesListed < 6) {
      amenitiesListed += 1;
      const amenityNumber = Math.floor((Math.random() * 40) + 1);
      return (
        <div key={i} className="amenityItem" >
          <img className="icon_2" alt="amenityIcon" src={`https://s3-us-west-1.amazonaws.com/napbnb/amenity${amenityNumber}.png`} />
          <div >{item.contents[0].item}</div>
        </div>
      );
    }
  });

  return (
    <hgroup id="amenitiesBoard" >
      <div className="title_1" >Amenities</div>
      <div className="listOfTopAmenities" >
        {amenitiesList}
      </div>
    </hgroup>
  );
}

export default Amenities;
