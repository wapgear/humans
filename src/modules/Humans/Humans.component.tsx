import React from "react"
import {Row, Col} from "antd"
import {HumansList} from "./components/Humans.list";
import {HumansDetails} from "./components/Humans.details";
import {IHumanComponentProps} from "./helpers/Humans.types";

export class HumansComponent extends React.Component<IHumanComponentProps, null> {
  render() {
    return (
        <div className="humans">
          <Row gutter={24}>
            <Col sm={10} xs={24}>
              <HumansList
                list={this.props.list}
                searchList={this.props.searchList}
                updateSearch={this.props.updateSearch}
                searchField={this.props.searchField}
                updateSelectedHuman={this.props.updateSelectedHuman}
                selectedHuman={this.props.selectedHuman}
                removeHuman={this.props.removeHuman}
              />
            </Col>
            <Col sm={14} xs={24}>
              <HumansDetails
                  initialValues={this.props.selectedHuman}
                  onSubmit={this.props.createOrUpdateHuman}
              />
            </Col>
          </Row>
        </div>
    )
  }
}