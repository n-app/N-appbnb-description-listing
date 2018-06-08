import React from 'react';

const ViewsAlert = (props) => {
  return (
    <hgroup id="viewsAlert">
      <div id="viewsAlertText">
        <div id="viewsTitle">{'This home is on people\'s minds.'}</div>
        <div id="ownerName" >{`It's been viewed ${props.data.numberOfViews}+ times in the past week.`}</div>
      </div>
      <div id="viewsAlertImage">
        <img id="lightBulbImage" alt="light bulb" src="https://s3-us-west-1.amazonaws.com/napbnb/icon2.png" />
      </div>
    </hgroup>
  );
};

export default ViewsAlert;
