import React from 'react';

import headings from '../data/headings.json';

const jQuery = require('jquery');
const $ = jQuery;
window.jQuery = window.$ = jQuery;
require('bootstrap-sass');

class Skill extends React.Component {
  constructor(props) {
    super(props);
  }

  get modalId() {
    return this.props.prefix + 'project' + this.props.index.toString() + '-details';
  }

  showLinks() {
    var links = [];
    for (var i = 0; i < this.props.links.length; i++) {
      var link = this.props.links[i];
      links.push(
        <button type="button" className="pop">{(i + 1).toString()}<span className="pop-content"><a href={link} target="_blank">{link}</a></span></button>
      );
    }
    return <span className="links">{links}</span>;
  }

  showThumbNailIfExists() {
    if (this.props.thumbnail != 'images/') {
      return <img className="thumbnail" src={this.props.thumbnail} alt={this.props.name + ' Screenshot'} />;
    }
  }

  showMoreIfExists() {
    if (this.props.details.role != '' && this.props.details.skills != '') {
      return (
        <div className="project-details">
          <button type="button" className="project-details-button" data-toggle="modal" data-target={'#' + this.modalId + '-modal'}>
              {headings.projectsMoreInfo}
          </button>

          <div className="modal fade" id={'#' + this.modalId + '-modal'} tabIndex="-1" role="dialog" aria-labelledby={this.modalId}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h3 className="modal-title" id={this.modalId}>{this.props.name}</h3>
                  <span>{this.props.startDate} &ndash; {this.props.endDate}</span>
                </div>
                <div className="modal-body">
                  <h4>Project Roles</h4>
                  <p>{this.props.details.role}</p>
                  <h4>Skills Used</h4>
                  <p>{this.props.details.skills}</p>
                  {(() => {
                    if (this.props.details.process != '') {
                      return (
                        <div>
                          <h4>Development Process</h4>
                          <p>{this.props.details.process}</p>
                        </div>
                      );
                    }
                  })()}
                  {(() => {
                    if (this.props.details.lessons != '') {
                      return (
                        <div>
                          <h4>Lessons Learned</h4>
                          <p>{this.props.details.lessons}</p>
                        </div>
                      );
                    }
                  })()}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    var currentYear = new Date().getFullYear();
    return (
      <article className="project">
        <img className="icon" src={'images/' + this.props.type.toLowerCase() + '.png'} alt={this.props.type} />
        <a href={this.props.link} target="_blank">{this.showThumbNailIfExists()}
        <h3>{this.props.name}</h3></a>
        <span>{this.props.startDate} &ndash; {this.props.endDate}</span>
        <p>{this.props.snippet}</p>

        {this.showMoreIfExists()}
      </article>
    );
  }
}

export default Skill;
