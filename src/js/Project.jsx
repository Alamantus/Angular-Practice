import React from 'react';

import headings from '../data/headings.json';

class Skill extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
    var currentYear = new Date().getFullYear();
    return (
      <div className="skill card-container" style={{zIndex: this.props.z}>
        <div className="card">
          <img src={this.props.icon} alt={this.props.name} />
          <h4>{this.props.name}</h4>
          <p className="details">
            {(currentYear - this.props.yearBegan) <= 1 ? '1' : (currentYear - this.props.yearBegan)}+ years of experience
          </p>
          {this.showLinks()}
        </div>
      </div>
      <article class="project" ng-repeat="project in projects | limitTo: numProjectsBeforeHide" ng-include="'projectTemplate'" ng-init="templatePrefix = ''">
        <img class="icon" src="images/icons/{this.props.type.toLowerCase()}.png" alt="{this.props.type}" />
        <a href="{this.props.link}" target="_blank"><img ng-if="project.thumbnail != ''" class="thumbnail" src="{this.props.thumbnail}" alt="{this.props.name} Screenshot" />
        <h3>{this.props.name}</h3></a>
        <span>{this.props.startDate} &ndash; {this.props.endDate}</span>
        <p ng-bind-html="project.snippet"></p>

        <div class="project-details" ng-if="showMoreInfo(project)">
            <!-- Button trigger modal -->
            <button type="button" class="project-details-button" data-toggle="modal" data-target="#{this.props.prefix}project{this.props.index}-details-modal">
                {headings.projectsMoreInfo}
            </button>

            <!-- Modal -->
            <div class="modal fade" id="{this.props.prefix}project{this.props.index}-details-modal" tabindex="-1" role="dialog" aria-labelledby="{this.props.prefix}project{this.props.index}-details">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h3 class="modal-title" id="{this.props.prefix}project{this.props.index}-details">{this.props.name}</h3>
                            <span>{this.props.startDate} &ndash; {this.props.endDate}</span>
                        </div>
                        <div class="modal-body">
                            <h4>Project Roles</h4>
                            <p>{this.props.details.role}</p>
                            <h4>Skills Used</h4>
                            <p>{this.props.details.skills}</p>
                            <div ng-If="project.details.process != ''">
                                <h4>Development Process</h4>
                                <p ng-bind-html="project.details.process"></p>
                            </div>
                            <div ng-If="project.details.lessons != ''">
                                <h4>Lessons Learned</h4>
                                <p ng-bind-html="project.details.lessons"></p>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </article>
    );
  }
}

export default Skill;
