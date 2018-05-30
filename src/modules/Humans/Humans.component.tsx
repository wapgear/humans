import React from "react"
import {Row, Col} from "antd"
import {HumansList} from "./components/Humans.list";
import {HumansDetails} from "./components/Humans.details";
import {IHumanComponentProps} from "./helpers/Humans.types";

export class HumansComponent extends React.Component<IHumanComponentProps, null> {
  render() {
    return (
        <div className="humans">
          Selected Human: {JSON.stringify(this.props.selectedHuman)}
          <Row gutter={24}>
            <Col span={10}>
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
            <Col span={14}>
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