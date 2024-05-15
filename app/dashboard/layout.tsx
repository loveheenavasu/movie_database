"use client";
import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DesktopOutlined,
  CompassOutlined,
  VideoCameraOutlined,
  HeartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Layout, Menu, theme } from "antd";
import SearchBox from "../ui/SearchBox/SearchBox";
import { useRouter } from "next/navigation";
import Image from "next/image";
const { Header, Sider, Content } = Layout;

export default function Layouts({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleMenuItemClick = (href: string) => {
    router.push(href);
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Image src="/logo.png" alt="logo" width={150} height={150} />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={({ key }) => handleMenuItemClick(key.toString())}
          items={[
            {
              key: "/dashboard/explore",
              icon: <CompassOutlined />,
              label: "Explore",
            },
            {
              key: "/dashboard/movie",
              icon: <VideoCameraOutlined />,
              label: "Movies",
            },
            {
              key: "/dashboard/series",
              icon: <DesktopOutlined />,
              label: "Series",
            },
            {
              key: "/dashboard/favourite",
              icon: <HeartOutlined />,
              label: "Favourites",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div className="flex justify-between items-center">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <SearchBox />
            <Avatar size="large" icon={<UserOutlined />} />
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
