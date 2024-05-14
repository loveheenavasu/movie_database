'use client'
import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DesktopOutlined, 
  CompassOutlined,
  VideoCameraOutlined,
  HeartOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import SearchBox from '../SearchBox/SearchBox';

const { Header, Sider, Content } = Layout;

const AppBar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical text-white " >Logo</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <CompassOutlined />,
              label: 'Explore',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Movies',
            },
            {
              key: '3',
              icon: <DesktopOutlined />,
              label: 'Series',
            },
            {
              key: '4',
              icon: <HeartOutlined />,
              label: 'Favourites',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div className='flex justify-between'>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <SearchBox/>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppBar;