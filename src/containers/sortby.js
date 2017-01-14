import React from 'react';

export default class sortby extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event, filter) {
    this.props.sortByFilter(filter);
  }
  render() {
    return (
      <div className="event-controls">
        <button
                className="sortby-repo-name"
                onClick={ (event) => this.handleClick(event, "repoName") }>
          Repository Name
        </button>
        <button
                className="sortby-repo-date"
                onClick={ (event) => this.handleClick(event, "date") }>
          Sort By Id
        </button>
      </div>
      );
  }
}
