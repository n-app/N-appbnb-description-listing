import React from 'react';

class Cancellations extends React.Component {
  constructor(props) {
    super(props);
    this.showCancellationDescription = this.showCancellationDescription.bind(this);
    this.state = {
      showCancellation: false,
      1: 'Soft',
      2: 'Flexible',
      3: 'Moderate',
      4: 'Strict',
      5: 'Harsh',
    };
  }

  showCancellationDescription() {
    this.setState({ showCancellation: true });
    console.log('cliclcilciclcick')
  }

  render() {
    const cancellationType = this.state[this.props.data.cancellationType];

    const previewText = this.props.data.cancelationSummary.slice(0, 130) + '...';

    const cancellationText = this.state.showCancellation ? (
      <div className="marginTop" >
        <div>
          <div className="paragraph" >
            {this.props.data.cancelationSummary}
          </div>
        </div>
      </div>
    ) : (
      <div>
        <div className="shortBorder" />
        <div className="rulesDisplay" >
          <div className="rulesDescription" className="paragraph" >
            {previewText}
          </div>
          <div className="button_1">
            <div className="buttonHover_1" >
              <div onClick={this.showCancellationDescription} >Read more</div>
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <div>
        <div className="" >
          <div className="marginTop" >
            <div className="title_1" >Cancellations</div>
          </div>
          <div className="marginTop" >
            <div className="paragraph" >{cancellationType}</div>
          </div>
          <div className="marginTop" >
            {cancellationText}
          </div>
        </div>
        <div className="button_1" >
          <div className="buttonHover_1" >
            <div className="marginTop" >Get details</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cancellations;
