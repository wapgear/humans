import React from "react"
import cx from "classnames"
import {HumansSearch} from "./Humans.search";
import {IHumanListProps} from "../helpers/Humans.types";

export class HumansList extends React.PureComponent<IHumanListProps, null> {
  
  updateSelectedHuman = (id: number) => () => {
    this.props.updateSelectedHuman(id)
  }
  
  onRemove = (id: number) => (e:any) => {
    this.props.removeHuman(id)
    e.stopPropagation();
  }
  
  render() {
    const {
      selectedHuman = {
        id: 0
      },
        list = [],
        searchField = "",
        searchList = [],
        updateSearch
    } = this.props;
    
    const final_list = searchField === "" ? list : searchList
    
    return (
        <div className="humans-list">
          <HumansSearch
            updateSearch={updateSearch}
            searchField={searchField}
            list={list}
          />
          {final_list.map(item =>
              <div
                  className={cx("humans-list__item", {"active": item.id === selectedHuman.id})}
                  onClick={this.updateSelectedHuman(item.id)}
              >
                <div
                    children={item.name}
                />
                <div
                    className="x-mark"
                    onClick={this.onRemove(item.id)}
                    children="X"
                />
              </div>
          )}
          <div className="humans-list__item add" onClick={this.updateSelectedHuman(0)}>
            + Add new
          </div>
        </div>
    )
  }
}