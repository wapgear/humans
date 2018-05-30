import React from "react"
import {IHumanSearchProps} from "../helpers/Humans.types";




export class HumansSearch extends React.Component<IHumanSearchProps, null> {
  
  onChange = (e) => {
    this.props.updateSearch(e.target.value, this.props.list)
  }
  
  render() {
    return (
        <div className="humans-list__search">
          <input
              type="text"
              onChange={this.onChange}
              placeholder="Search..."
              value={this.props.searchField}
          />
        </div>
    )
  }
}
