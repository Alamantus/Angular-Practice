import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {likesCount: 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike() {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {
    return (
      <nav>
        <container>
          <header>
            <button type="button" class="collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="brand" href="/">{{siteTitle}}</a>

            <links class="collapse" id="navbar-collapse">
              <ul>
                <li><a href="#top">{{summaryTitle}}</a></li>
                <li><a href="#projects">{{projectsTitle}}</a></li>
                <li><a href="#about">{{informationTitle}}</a></li>
              </ul>
            </links>
          </header>
        </container>
      </nav>
    );
  }
}

export default NavBar;
