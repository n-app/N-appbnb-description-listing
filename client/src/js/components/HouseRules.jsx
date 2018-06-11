import React from 'react';

class HouseRules extends React.Component {
  constructor(props) {
    super(props);
    this.hideRules = this.hideRules.bind(this);
    this.showRules = this.showRules.bind(this);
    this.state = {
      displayRules: false,
    };
  }

  hideRules() {
    this.setState({ displayRules: false });
  }

  showRules() {
    this.setState({ displayRules: true });
  }

  render() {
    const smoking = this.props.data.smoking ? (
      <div className="singleRule" >No smoking</div>
    ) : (
      null
    );
    const pets = this.props.data.petSuitable ? (
      <div className="singleRule" >No suitable for pets</div>
    ) : (
      null
    );
    const partiesOrEvents = this.props.data.partiesOrEvents ? (
      <div className="singleRule" >No parties or events</div>
    ) : (
      null
    );
    const selfCheckIn = this.props.data.selfCheckInWithLockBox ? (
      <div className="singleRule" >Self check-in with lockbox</div>
    ) : (
      null
    );


    const rulesDisplay = this.state.displayRules ? (
      <div>
        <div className="shortBorder" />
        <div className="rulesDisplay" >
          <div className="rulesDescription" className="paragraph" >
            {this.props.data.description[0].comment}
          </div>
          <div className="rulestoAcknowledgeTitle" className="title_1" >You must also acknowledge</div>
          <div className="rulestoAcknowledge" className="paragraph">
            {this.props.data.rulesToAcknoledge}
          </div>
          <div className="button_1">
            <div className="buttonHover_1" >
              <div onClick={this.hideRules} >Hide rules</div>
            </div>
            <div className="arrow">&and;</div>
          </div>
        </div>
      </div>
    ) : (
      <div className="button_1" >
        <div className="buttonHover_1" >
          <div onClick={this.showRules} >Read all rules</div>
        </div>
        <div className="arrow"> &or;</div>
      </div>
    );

    return (
      <div>
        <div className="rulesBoard" >
          <div className="title_1" >House Rules</div>
          <div className="rulesTable" >
            {smoking}
            {pets}
            {partiesOrEvents}
            <div className="singleRule" >{`Check-in time is ${this.props.data.checkInStartTime}PM - ${this.props.data.checkInEndTime}PM`}</div>
            <div className="singleRule" >{`Check out by ${this.props.data.checkOutTime}AM`}</div>
            {selfCheckIn}
          </div>
         </div>
        <div className="rulesDescription">
          {rulesDisplay}
        </div>
      </div>
    );
  }
}

export default HouseRules;
