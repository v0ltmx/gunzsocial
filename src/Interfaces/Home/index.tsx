import Footer from '@/Componentes/Footer';
import {
  BoldOutlined,
  CrownOutlined,
  FireOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TrophyTwoTone,
} from '@ant-design/icons';

import { Layout, Menu, Button, theme } from 'antd';
import { useState } from 'react';
import Excalibur from '../Excalibur';
import Sensation from '../Sensation';
import Barcelona from '../Barcelona';
import Torneio from '../Torneio';

const { Header, Sider, Content } = Layout;


export default function Home() {

  const [selectedMenuKey, setSelectedMenuKey] = useState('1');

  const handleMenuClick = (e: any) => {
    setSelectedMenuKey(e.key); 
  };

  let contentComponent;
  switch (selectedMenuKey) {
    case '1':
      contentComponent = <Excalibur/>;
      break;
    case '2':
      contentComponent = <Sensation />;
      break;
    case '3':
      contentComponent = <Barcelona />;
      break;
    case '4':
      contentComponent = <Torneio/>
      break;
    default:
      contentComponent = null;
  }

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
      <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          onClick={handleMenuClick}
          items={[
            {
              key: '1',
              icon: <CrownOutlined />,
              label: 'Excalibur',
            },
            {
              key: '2',
              icon: <FireOutlined />,
              label: 'Sensation',
            },
            {
              key: '3',
              icon: <BoldOutlined />,
              label: 'Barcelona',
            },
            {
              key: '4',
              icon: <TrophyTwoTone />,
              label: 'Tournament Flip',
            }
          ]}
        />
      </Sider>


      <Layout>
      <Header style={{ padding: 0, background: colorBgContainer, display:'flex', alignItems:"center" }}>
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
          <div>
          <h1>Gunz social</h1>
          </div>
        </Header>


        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 700,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {contentComponent}
        </Content>


      </Layout>

      
    </Layout>
    <Footer/>
    </>
  );
}
