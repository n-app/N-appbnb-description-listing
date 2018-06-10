import React from 'react';

const Header = (props) => {
  return (
<<<<<<< HEAD
    <hgroup id="listingHeader" >
      <div className="headerPropertyInfo" >
=======
    <hgroup id="listingHeader">
      <div className="headerPropertyInfo">
>>>>>>> af85d18d38095ecd10896c6149ad4e544f4ac3e3
        <div className="listingTitle" >{props.data.title}</div>
        <div className="listingLocation" >{props.data.location}</div>
      </div>
      <div className="headerOwnerInfo">
        <img className="ownerImage" alt="home owner" src={props.data.ownerPicture_url.slice(1, 48).concat(props.data.ownerPicture_url.slice(49))} />
        <div className="ownerName" >{props.data.owner}</div>
      </div>
    </hgroup>
  );
};

export default Header;
