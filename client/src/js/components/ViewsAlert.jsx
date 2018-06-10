import React from 'react';

const ViewsAlert = (props) => {
<<<<<<< HEAD
  if (props.data > 200) {
    return (
      <hgroup id="viewsAlert" className="lightBorder" >
        <div className="viewsAlertText" >
          <div className="title_1" >{'This home is on people\'s minds.'}</div>
          <div id="ownerName" >{`It's been viewed ${props.data}+ times in the past week.`}</div>
        </div>
        <div className="viewsAlertImage" >
          <img className="lightBulbImage" alt="light bulb" src="https://s3-us-west-1.amazonaws.com/napbnb/icon2.png" />
        </div>
      </hgroup>
    );
  }
  return null;
=======
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
>>>>>>> af85d18d38095ecd10896c6149ad4e544f4ac3e3
};

export default ViewsAlert;
