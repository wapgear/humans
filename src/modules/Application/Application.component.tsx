import React from "react"
import {Layout, Menu} from 'antd';
const { Header, Content } = Layout;

export class ApplicationComponent extends React.PureComponent<any, any> {
  render() {
    return (
        <div className="application">
          <Layout className="layout">
            <Header className="header">
              <div className="logo">
                HUMANS DEMO
              </div>
            </Header>
            <Content>
              {this.props.children}
            </Content>
          </Layout>
        </div>
    )
  }
}