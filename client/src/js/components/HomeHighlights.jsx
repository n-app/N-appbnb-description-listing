import React from 'react';

const Highlights = (props) => {
  const highlightsContent = props.data.map((item) => 
    <div className="highlight" >
      <div>
        <div className="highlightTitle" >{item.title}</div>
        <div className="highlightText" >&#183;{` ${item.comment}`}</div>
      </div>
      <div className="highlightFeedBack" >
        <div className="highlightFeedback_1" >Helpful</div>
        <img className="highlightThumbsUp" alt="thumbs up" src="https://s3-us-west-1.amazonaws.com/napbnb/icon7.png" />
        <div className="dot" >&#183;</div>
        <div className="highlightFeedback_2" >Not helpful</div>  
      </div>
    </div>);

  return (
    <hgroup id="highlightsBoard" className="lightBorder" >
      <div className="title_0 " >HOME HIGHLIGHTS</div>
      <div className="allHighlights" >
        {highlightsContent}
      </div>
    </hgroup>
  );
};

export default Highlights;
