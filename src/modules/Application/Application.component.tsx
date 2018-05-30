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
              <Menu mode="horizontal" theme="dark">
                  <Menu.Item>Demo</Menu.Item>
                  <Menu.Item>Demo 2</Menu.Item>
              </Menu>
            </Header>
            <Content style={{padding: 32}}>
              {this.props.children}
            </Content>
          </Layout>
        </div>
    )
  }
}