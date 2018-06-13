import React from 'react';
import AllAmenities from './AllAmenities';

const AmenitiesModal = (props) => {

  if (!props.data.showAmenitiesModal) {
    return null;
  }

  return (
    <div className="backdropStyle">
      <div className="modalStyle">
        <input type="image" onClick={props.onClose} alt="exit" className="xButton" src="https://s3-us-west-1.amazonaws.com/napbnb/iconx.png" />
        <AllAmenities data={props.data.amenities} />
      </div>
    </div>
  );
};

export default AmenitiesModal;
