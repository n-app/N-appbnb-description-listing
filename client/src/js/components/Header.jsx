import React from 'react';

const Header = (props) => {
  return (
    <hgroup id="listingHeader">
      <div id="headerPropertyInfo">
        <div id="listingTitle" >{props.data.title}</div>
        <div id="listingLocation" >{props.data.location}</div>
      </div>
      <div id="headerOwnerInfo">
        <img id="ownerImage" alt="home owner" src={props.data.ownerPicture_url.slice(1, 48).concat(props.data.ownerPicture_url.slice(49))} />
        <div id="ownerName" >{props.data.owner}</div>
      </div>
    </hgroup>
  );
};

export default Header;
