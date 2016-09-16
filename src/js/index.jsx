require('../index.html');
require("../sass/main.scss");

const jQuery = $ = require('jquery');
window.jQuery = window.$ = jQuery;
require('bootstrap-sass');

const shuffle = require('knuth-shuffle');

import React from 'react';
import {render} from 'react-dom';

import Trait from './Trait.jsx';
import Skill from './Skill.jsx';

import headings from '../data/headings.json';
import traitsArray from '../data/traits.json';
import skillsArray from '../data/skills.json';

class App extends React.Component {
  showTraits(traits) {
    var result = [];
    for (var i = 0; i < traits.length; i++) {
      result.push(<Trait key={'trait_' + i.toString()} name={traits[i].name} details={traits[i].details} z={1000 + traits.length - i} />);
    }
    return <div>{result}</div>;
  }

  showSkills(skills) {
    var result = [];
    for (var i = 0; i < skills.length; i++) {
      result.push(<Skill key={'skill_' + i.toString()} name={skills[i].name} icon={'images/' + skills[i].icon} specifics={skills[i].specifics}
        yearBegan={skills[i].yearBegan} links={skills[i].links} z={1000 + skills.length - i} />);
    }
    return <div>{result}</div>;
  }

  render () {
    return (
      <div id="siteContents">

        <nav>
          <container>
            <header>
              <button type="button" className="collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="brand" href="/">{headings.siteTitle}</a><span>{headings.siteSubtitle}</span>

              <links className="collapse" id="navbar-collapse">
                <ul>
                  <li><a href="#top">{headings.summaryTitle}</a></li>
                  <li><a href="#projects">{headings.projectsTitle}</a></li>
                  <li><a href="#about">{headings.informationTitle}</a></li>
                </ul>
              </links>
            </header>
          </container>
        </nav>

        <container id="content" className="center-block">

          <a name="top" className="anchor"></a>
          <h2>{headings.summaryTitle}</h2>

          <section id="traits-container">
            {this.showTraits(traitsArray)}
          </section>

          <section id="skills-container">
            <h3>{headings.skillsTitle}</h3>
            {this.showSkills(skillsArray)}
          </section>

          <section id="projects-container">
            <a name="projects" class="anchor"></a>
            <h2>{headings.projectsTitle}</h2>

            <article class="project" ng-repeat="project in projects | limitTo: numProjectsBeforeHide" ng-include="'projectTemplate'" ng-init="templatePrefix = ''"></article>

            <div id="hidden-projects" class="project-hider">
                <div class="panel-heading" data-toggle="collapse" data-target="#projects-collapse">
                    <h3>{headings.moreProjectsTitle}</h3>
                </div>
                <div id="projects-collapse" class="panel-body collapse">
                    <article class="project" ng-repeat="project in projects | startFrom: numProjectsBeforeHide" ng-include="'projectTemplate'" ng-init="templatePrefix = 'hidden-'"></article>
                </div>
            </div>
        </section>

        </container>

      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
