import React from 'react';
import {Layout, Menu, type MenuProps, Tabs, type TabsProps} from 'antd';

import {AppstoreOutlined, MailOutlined, MailTwoTone, PlaySquareOutlined, SettingOutlined,} from '@ant-design/icons';

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
    minHeight: 'calc(100vh - 64px)',
    color: '#fff',
    backgroundColor: '#0958d9',
};

const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#1677ff',
};

type MenuItem = Required<MenuProps>['items'][number];

const menus: MenuItem[] = [
    {
        label: 'Navigation One',
        key: 'mail',
        icon: <MailOutlined/>,
        children: [
            {label: 'Option 1', key: 'setting:1a', icon: <PlaySquareOutlined/>},
        ]
    },
    {
        label: 'Navigation Two',
        key: 'app',
        icon: <AppstoreOutlined/>,
        children: [
            {label: 'Option 1', key: 'setting:1b', icon: <MailTwoTone/>},
        ]
    },
    {
        label: 'Navigation Three',
        key: 'SubMenu',
        icon: <SettingOutlined/>,
        children: [
            {label: 'Option 1', key: 'setting:1'},
            {label: 'Option 2', key: 'setting:2'},
            {label: 'Option 3', key: 'setting:3'},
            {label: 'Option 4', key: 'setting:4'},
        ],
    }
];

const tabs: TabsProps['items'] = [
    {
        key: '1',
        label: 'Tab 1',
        children: 'Content of Tab Pane 1',
    },
    {
        key: '2',
        label: 'Tab 2',
        children: 'Content of Tab Pane 2',
    },
    {
        key: '3',
        label: 'Tab 3',
        children: 'Content of Tab Pane 3',
    },
]


const SiderInfo = () => {
    const handleMenuClick: MenuProps['onClick'] = (e) => {
        console.info(e)
    }
    return (
        <Menu
            mode="inline"
            items={menus}
            style={{height: '100%'}}
            onClick={handleMenuClick}
        />
    );
};

const ContentInfo = () => {
    return (
        <Tabs
            items={tabs}
        />
    )
}

const App: React.FC = () => (
    <Layout style={{minHeight: '100vh'}}>
        <Header style={headerStyle}>Header</Header>
        <Layout>
            <Sider width="15%" style={siderStyle}>
                <SiderInfo/>
            </Sider>
            <Content style={contentStyle}>
                <ContentInfo/>
            </Content>
        </Layout>
    </Layout>
);

export default App;
