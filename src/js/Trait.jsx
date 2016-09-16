import React from 'react';

class Trait extends React.Component {
  constructor(props, {name, details, icon}) {
    super(props);
    this.name = name;
    this.details = details;
    this.icon = icon;
  }

  render() {
    return (
      <div class="card-flipper">
        <div class="card-front">
          <img src="{this.icon}" alt="{this.name}" />
        </div>
        <div class="card-back">
          <h3>{this.name}</h3>
          <p class="details">{this.details}</p>
        </div>
      </div>
    );
  }
}

export default Trait;
