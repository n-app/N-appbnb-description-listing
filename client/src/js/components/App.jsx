import React from 'react';
import axios from 'axios';
import Header from './Header';
import Accomodations from './Accomodations';
import ViewsAlert from './ViewsAlert';
import Highlights from './HomeHighlights';
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
    if (this.state.home) {
      return (
        <div>
          <div id="board">
            <div className="title_0 " >{this.state.home.propertyType}</div>
            <Header data={this.state.home} />
            <Accomodations data={this.state.home} />
            <ViewsAlert data={this.state.home.numberOfViews} />
            <Highlights data={this.state.home.homeHighlights} />
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

