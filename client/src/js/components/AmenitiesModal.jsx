import React from 'react';
import PropTypes from 'prop-types';
import AllAmenities from './AllAmenities';

const AmenitiesModal = (props) => {
 console.log('the props at AmenitiesModal. ->>', props);
  // Render nothing if the "show" prop is false
  if (!props.data.showAmenitiesModal) {
    return null;
  }
  // The modal "window"
  return (
    <div className="backdropStyle" onClick={props.onClose} >
      <div className="modalStyle" >
        <img onClick={props.onClose} alt="exit" className="xButton" src="https://s3-us-west-1.amazonaws.com/napbnb/iconx.png" />
        <AllAmenities data={props.data.amenities}/>
      </div>
    </div>
  );
}

AmenitiesModal.propTypes = {
  // onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default AmenitiesModal;