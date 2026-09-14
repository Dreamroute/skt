import React from 'react';
import {Layout} from 'antd';

const {Header, Sider, Content} = Layout;

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 220,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#0958d9',
};

const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#1677ff',
};

const App: React.FC = () => (
    <Layout>
        <Header style={headerStyle}>Header</Header>
        <Layout>
            <Sider width="12%" style={siderStyle}>
                Sider
            </Sider>
            <Content style={contentStyle}>Content</Content>
        </Layout>
    </Layout>
);

export default App;