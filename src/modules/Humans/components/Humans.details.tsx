import React from "react"
import idx from "idx"
import {Row, Col} from "antd"
import { Form, Field } from 'react-final-form'
import {IHumanDetailsProps} from "../helpers/Humans.types";


export class HumansDetails extends React.Component<IHumanDetailsProps, null> {
  
  onSubmit = this.props.onSubmit
  
  render() {
    
    const initialValues = {
      id: idx(this.props.initialValues, _ => _.id) || 0,
      name: idx(this.props.initialValues, _ => _.name) || "",
      notes: idx(this.props.initialValues, _ => _.notes) || ""
    }
    
    return (
        <div className="humans-details">
          <Form
              onSubmit={this.onSubmit}
              initialValues={initialValues}
              render={({ handleSubmit, reset, submitting, pristine, values }) => (
                  <form onSubmit={handleSubmit} id="humans-details">
                    <Row>
                      <Col sm={20} xs={24}>
                        <div className="humans-details__name">
                          <Field
                              name="name"
                              component="input"
                              type="text"
                              placeholder="Name"
                          />
                        </div>
                      </Col>
                      <Col sm={4} xs={24}>
                        <div className="humans-details__save">
                          <button type="submit" disabled={submitting || pristine}>
                            {values.id !== 0 ? "Update" : "Add"}
                          </button>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={24}>
                        <div className="humans-details__notes">
                          <Field
                              name="notes"
                              component="textarea"
                              placeholder="Notes"
                          />
                        </div>
                      </Col>
                    </Row>
                  </form>
              )}
          />
        </div>
    )
  }
}
