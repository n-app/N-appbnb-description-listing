import React from 'react';
import axios from 'axios';
import Header from './Header';
import Accomodations from './Accomodations';
import ViewsAlert from './ViewsAlert';
import Highlights from './HomeHighlights';
import HomeDescription from './HomeDescription';
import Amenities from './Amenities';
import HouseRules from './HouseRules';
import Cancellations from './Cancellations';

import '../../../css/main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getHomeData(Math.floor(Math.random() * (100)) + 1000);
  }

  getHomeData(id) {
    axios.get(`http://127.0.0.1:3001/homes/${id}`)
      .then((response) => {
        const homeData = response.data[0];
        this.setState({ home: homeData });
      })
      .catch((err) => {
        console.error('error at clientfetching', err);
      });
  }

  render() {
    console.log(this.state.home);
    if (this.state.home) {
      return (
        <div>
          <div id="board">
            <div className="title_0 " >{this.state.home.propertyType}</div>
            <Header data={this.state.home} />
            <Accomodations data={this.state.home} />
            <ViewsAlert data={this.state.home.numberOfViews} />
            <Highlights data={this.state.home.homeHighlights} />
            <p className="paragraph">{this.state.home.descriptionSummary}</p>
            <HomeDescription data={this.state.home.description} />
            <div id="contactHost">
              <div className="buttonHover_1" >
                <div className="button_1" >Contact host</div>
              </div>
            </div>
            <Amenities data={this.state.home.amenities} />
            <HouseRules data={this.state.home} />
            <Cancellations data={this.state.home} />
          </div>
        </div>
      );
    }
    return (
      <div>Loading...</div>
    );
  }
}

export default App;

