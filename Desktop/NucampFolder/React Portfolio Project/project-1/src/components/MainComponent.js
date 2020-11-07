import React, { Component } from 'react';
import { DOGS } from '../shared/dogs';
//import FeaturedDogs  from './components/HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import FeaturedDirectory from './DogDirectory';
import Dogs from './DogsComponent'


class Main extends Component {
  constructor(props) {
    super(props);
    this.state= {
      dogs:  DOGS
    }
  }

  render() {
      return (
          <div>
           <Header/>
           <FeaturedDirectory dogs={this.state.dogs}/>
         
           <Footer />
          </div>
      );
  }
}

export default Main;
