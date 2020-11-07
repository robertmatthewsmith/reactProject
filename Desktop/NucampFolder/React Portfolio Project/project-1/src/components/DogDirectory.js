import React, { Component } from "react";


 add .className

class FeaturedDirectory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const filteredFeatured = this.props.dogs.filter((dog) => dog.age > 4);
    const featured = filteredFeatured.map((dog) => {
      return (
        <div className="col pt-5 dogClass">
          <img src={dog.image} alt={dog.name} width="250" />
          <h2>{dog.name}</h2>
          <p>{dog.comments}</p>
          <p>{dog.breed}</p>
        </div>
      );
    });

    return (
      <div className="container-fluid dogCont pt-4">
        <div className="row">
          <div className="col text-center  ">
            <h1>Featured Pets</h1>
          </div>
        </div>
        <div className="row">{featured}</div>
      </div>
    );
  }
}

export default FeaturedDirectory;
