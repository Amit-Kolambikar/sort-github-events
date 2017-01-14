import React from 'react';
import SortBy from './sortby'
export default class fetchEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventList: []
    }
    // for sorting toggles
    this.sortByIdFlag = true;
    this.sortByNameFlag = true;
    this.sortByFilter = this.sortByFilter.bind(this)
  }

  fetchData = () => {
    return fetch(`https://api.github.com/events`).then(response => response.json()).then((json) => {
      json.map
      this.setState({
        eventList: json
      })
    })
  }
  componentWillMount() {
    let data = this.fetchData()
    this.setState({
      eventList: data
    })
  }
  sortByFilter(filter) {
    let cloneEventList = [...this.state.eventList]
    if (filter === "date") {
      cloneEventList.sort((a, b) => {
        if (this.sortByIdFlag)
          return parseInt(a.id) - parseInt(b.id);
        else
          return parseInt(b.id) - parseInt(a.id);
      })
      this.sortByIdFlag = !this.sortByIdFlag
    } else {
      cloneEventList.sort((a, b) => {
        let l1, l2;
        this.sortByNameFlag ? (l1 = a, l2 = b) : (l1 = b, l2 = a) ;

        if (l1.repo.name < l2.repo.name) return -1;
        if (l1.repo.name > l2.repo.name) return 1;
        return 0;
      })
      this.sortByNameFlag = !this.sortByNameFlag
    }
    this.setState({
      eventList: cloneEventList
    })
  }
  render() {
    const data = this.state.eventList
    if (data.length > 0) {
      return (
        <div>
          <div className="table-layout">
            <SortBy sortByFilter={ this.sortByFilter } />
            { data.map((item, key) => <div
                                           className="data-item"
                                           key={ key }>
                                        <a
                                           className="data-link"
                                           href={ item.actor.url }
                                           target="_blank"><img
                                                                                                                src={ item.actor.avatar_url }
                                                                                                                className="user-image" />
                                          <h6 className="user-name">@{ item.actor.display_login }</h6>
                                          <h6 className="repo">{ item.repo.name }</h6>
                                          <h6 className="date">{ item.id }</h6></a>
                                      </div>
              ) }
          </div>
        </div>
        );
    // <h6 className="date">{ Date(item.created_at) }</h6>
    } else return (<div>
                     <h2 className="loading">Loading...</h2>
                   </div>)
  }
}
