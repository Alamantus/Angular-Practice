import React from 'react';

class Trait extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="trait card-container" style={{zIndex: this.props.z}}>
        <div className="card">
          <h3>{this.props.name}</h3>
          <p className="details">{this.props.details}</p>
        </div>
      </div>
    );
  }
}

export default Trait;
