import React, {useState} from 'react';
import {Layout, Menu, type MenuProps, Tabs, type TabsProps} from 'antd';

import {
    AppstoreOutlined,
    MailOutlined,
    MailTwoTone,
    PlaySquareOutlined,
    SettingOutlined,
} from '@ant-design/icons';

const {Header, Sider, Content} = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const menus: MenuItem[] = [
    {
        label: 'Navigation One',
        key: 'mail',
        icon: <MailOutlined/>,
        children: [
            {
                label: 'Option 1',
                key: 'setting:1a',
                icon: <PlaySquareOutlined/>
            },
        ]
    },
    {
        label: 'Navigation Two',
        key: 'app',
        icon: <AppstoreOutlined/>,
        children: [
            {
                label: 'Option 1',
                key: 'setting:1b',
                icon: <MailTwoTone/>
            },
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

const initialTabs: TabsProps['items'] = [
    {
        key: 'home',
        label: 'Home',
        children: 'Home Content',
    },
];

interface SiderInfoProps {
    onMenuClick: (key: string) => void
}

const SiderInfo = ({onMenuClick}: SiderInfoProps) => {

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        onMenuClick(e.key)
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

interface ContentInfoProps {
    tabs: TabsProps['items']
    activeKey: string
    onChange: (key: string) => void
}

const ContentInfo = ({
                         tabs,
                         activeKey,
                         onChange
                     }: ContentInfoProps) => {

    const onEdit = (key: any, action: 'add' | 'remove') => {
        console.info(key)
        console.info(action)
    };

    return (
        <Tabs
            items={tabs}
            activeKey={activeKey}
            onChange={onChange}
            type="editable-card"
            onEdit={onEdit}
        />
    )
}

const App: React.FC = () => {

    const [tabs, setTabs] = useState<TabsProps['items']>(initialTabs)

    const [activeKey, setActiveKey] = useState('home')

    const handleMenuClick = (key: string) => {

        // 已经存在就不要重复添加
        const exists = tabs?.some(tab => tab.key === key)

        if (!exists) {
            const newTab = {
                key: key,
                label: key,
                children: `Content of ${key}`
            }

            setTabs([
                ...(tabs ?? []),
                newTab
            ])
        }

        // 点击菜单之后自动切换到对应 Tab
        setActiveKey(key)
    }

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Header style={{height: 64}}>Header</Header>

            <Layout>
                <Sider width="15%">
                    <SiderInfo
                        onMenuClick={handleMenuClick}
                    />
                </Sider>

                <Content style={{minHeight: 'calc(100vh - 64px)'}}>
                    <ContentInfo
                        tabs={tabs}
                        activeKey={activeKey}
                        onChange={setActiveKey}
                    />
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;