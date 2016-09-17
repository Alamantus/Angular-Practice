import React from 'react';

class Skill extends React.Component {
  constructor(props) {
    super(props);
  }

  showLinks() {
    var links = [];
    for (var i = 0; i < this.props.links.length; i++) {
      var link = this.props.links[i];
      links.push(
        <button key={this.props.name + 'link' + i.toString()} type="button" className="pop">{(i + 1).toString()}<span className="pop-content"><a href={link} target="_blank">{link}</a></span></button>
      );
    }
    return <span className="links">{links}</span>;
  }

  render() {
    var currentYear = new Date().getFullYear();
    return (
      <div className="skill card-container" style={{zIndex: this.props.z}}>
        <div className="card">
          <img src={this.props.icon} alt={this.props.name} />
          <h4>{this.props.name}</h4>
          <p className="details">
            {(currentYear - this.props.yearBegan) <= 1 ? '1' : (currentYear - this.props.yearBegan)}+ years of experience
          </p>
          {this.showLinks()}
        </div>
      </div>
    );
  }
}

export default Skill;
