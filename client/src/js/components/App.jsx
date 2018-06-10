import React from 'react';
import axios from 'axios';
import Header from './Header';
import Accomodations from './Accomodations';
<<<<<<< HEAD
import ViewsAlert from './ViewsAlert';
import Highlights from './HomeHighlights';
import HomeDescription from './HomeDescription';
import Amenities from './Amenities';
import AllAmenities from './AllAmenities';

=======
>>>>>>> af85d18d38095ecd10896c6149ad4e544f4ac3e3
import '../../../css/main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD

    this.showAmenities = this.showAmenities.bind(this);
    this.state = {
      showAmenities: false,
    };
=======
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
>>>>>>> af85d18d38095ecd10896c6149ad4e544f4ac3e3
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

  showAmenities() {
    this.setState({ showAmenities: !this.state.showAmenities });
  }

  render() {
    if (this.state.home) {
      return (
        <div>
          <div id="board">
<<<<<<< HEAD
            <div className="title_0 " >{this.state.home.propertyType}</div>
            <Header data={this.state.home} />
            <Accomodations data={this.state.home} />
            <ViewsAlert data={this.state.home.numberOfViews} />
            <Highlights data={this.state.home.homeHighlights} />
            <p className="paragraph">{this.state.home.descriptionSummary}</p>
            <HomeDescription data={this.state.home.description} />
            <div className="buttonHover_1" >
              <div className="button_1" >Contact host</div>
            </div>
            <Amenities data={this.state.home.amenities} />
            <div className="button_1">
              <div className="buttonHover_1">
                <div onClick={this.showAmenities} >{`Show all ${41} amenities`}</div>
              </div>
            </div>
            <div id="amenityModal" class="modal">
              <AllAmenities data={this.state.home.amenities} />
            </div>
=======
            <div className="propertyTypeTitle">{this.state.home.propertyType}</div>
            <Header data={this.state.home} />
            <Accomodations data={this.state.home} />
>>>>>>> af85d18d38095ecd10896c6149ad4e544f4ac3e3
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

