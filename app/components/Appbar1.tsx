'use client'
import React, { useState } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, Button, MenuProps } from 'antd';
import { useRouter } from 'next/navigation';

const { Header, Content, Footer, Sider } = Layout;


const items = [
  { key: '0', icon: React.createElement(UserOutlined), label: 'Employee' },
  { key: '1', icon: React.createElement(UserOutlined), label: 'Employee2' },
]
type Appbar1Props = {
  children: React.ReactNode;
};

const Appbar1: React.FC<Appbar1Props> = ({ children }) => {
  const router = useRouter()
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleMenues = (info: any) => {
    const label = items.find((x:any)=> info.key === x.key)?.label

    if(label === 'Employee'){
      router.push('/dashboard/employee')
    }
    
  };
  return (
    <Layout className='h-screen'>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        breakpoint="lg"
        collapsedWidth="100"
      >
        <div className="demo-logo-vertical" />
        <h1 className='text-white text-center pt-6 text-xl mb-4'>Title</h1>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} onClick={(info:any) => handleMenues(info)} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: '0 16px',
            background: colorBgContainer,
            display: 'flex',
            alignItems: 'center',
          }}
        >

        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            className='h-full'
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Appbar1;
