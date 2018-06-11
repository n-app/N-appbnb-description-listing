import React from 'react';

class HomeDescription extends React.Component {
  constructor(props) {
    super(props);
    this.hideDescription = this.hideDescription.bind(this);
    this.showDescription = this.showDescription.bind(this);
    this.state = {
      displayDescription: false,
    };
  }

  hideDescription() {
    this.setState({ displayDescription: false });
  }

  showDescription() {
    this.setState({ displayDescription: true });
  }

  render() {
    const descriptionContent = this.props.data.map((item, i) => {
      <div className="descriptionSection" key={i}>
        <div className="descriptionTitle" className="title_1" >{item.title}</div>
        <div className="descriptionContent" className="paragraph">{item.comment}</div>
      </div>
    });

    const descriptionDisplay = this.state.displayDescription ? (
      <div className="showDescription" >
        <div className="descriptionContent">
          {descriptionContent}
        </div>
        <div className="button_1">
          <div className="buttonHover_1" >
            <div onClick={this.hideDescription} >Hide</div>
          </div>
          <div className="arrow">&and;</div>
        </div>
      </div>
    ) : (
      <div className="button_1" >
        <div className="buttonHover_1" >
          <div onClick={this.showDescription} >Read more about the space</div>
        </div>
        <div className="arrow"> &or;</div>
      </div>
    );

    return (
      <div className="descriptionBoard">
        {descriptionDisplay}
      </div>
    );
  }
}

export default HomeDescription;
