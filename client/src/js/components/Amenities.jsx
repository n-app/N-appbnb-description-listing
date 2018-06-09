import React from 'react';

class Amenities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.data);
    let amenitiesListed = 0;
    const amenitiesList = this.props.data.map((item, i) => {
      if (item.contents[0] && amenitiesListed < 6) {
        amenitiesListed += 1;
        const amenityNumber = Math.floor((Math.random() * 40) + 1);
        return (
          <div key={i} className="amenityItem" >
            <img className="icon_1" src={`https://s3-us-west-1.amazonaws.com/napbnb/amenity${amenityNumber}.png`} />
            <div>{item.contents[0].item}</div>
          </div>
        );
      }
    });

    return (
      <hgroup id="AmenitiesBoard" >
        <div className="title_1" >Amenities</div>
        <div className="allAmenities" >
          {amenitiesList}
        </div>
      </hgroup>
    );
  }
}

export default Amenities;
