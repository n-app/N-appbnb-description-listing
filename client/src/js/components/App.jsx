import React from 'react';
import axios from 'axios';
import Header from './Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getHandler = this.getHandler.bind(this);
     this.getHandler();
  }

  getHandler() {
    axios.get('http://127.0.0.1:3001/homes/1003')
      .then((response) => {
        const homeData = response.data[0];
        console.log('response from client get request', homeData);
        this.setState({ home: homeData });
      })
      .catch((err) => {
        console.log('err->', err);
      });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div>
          <Header data={this.state.home} />
        </div>
      </div>
    );
  }
}

export default App;
