import Footer from "@/Componentes/Footer";
import {
  BoldOutlined,
  CrownOutlined,
  FireOutlined,
  HolderOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TrophyTwoTone,
} from "@ant-design/icons";

import { Layout, Menu, Button, theme, Drawer } from "antd";
import { useEffect, useState } from "react";
import Excalibur from "../Excalibur";
import Sensation from "../Sensation";
import Barcelona from "../Barcelona";
import Torneio from "../Torneio";
import Inicio from "../Inicio";

const { Header, Sider, Content } = Layout;

export default function Home() {
  const [selectedMenuKey, setSelectedMenuKey] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const handleMenuClick = (e: any) => {
    setSelectedMenuKey(e.key);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    handleResize(); 

    window.addEventListener("resize", handleResize); 

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let contentComponent;
  switch (selectedMenuKey) {
    case "0":
      contentComponent = <Inicio />;
      break;
    case "1":
      contentComponent = <Excalibur />;
      break;
    case "2":
      contentComponent = <Sensation />;
      break;
    case "3":
      contentComponent = <Barcelona />;
      break;
    case "4":
      contentComponent = <Torneio />;
      break;
    default:
      contentComponent = <Inicio />;
  }

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
      <Layout>
        {isMobile ? (
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
              display: "flex",
              alignItems: "center",
              marginTop:"-70px"
            }}
          >
            <Drawer
              placement="right"
              closable={true}
              onClose={() => setCollapsed(false)}
              visible={collapsed}
              width={300}
            >
              <Menu
                theme="light"
                mode="inline"
                onClick={handleMenuClick}
                defaultSelectedKeys={["0"]}
                items={[
                  {
                    key: "0",
                    icon: <HolderOutlined />,
                    label: "Início",
                  },
                  {
                    key: "1",
                    icon: <CrownOutlined />,
                    label: "Excalibur",
                  },
                  {
                    key: "2",
                    icon: <FireOutlined />,
                    label: "Sensation",
                  },
                  {
                    key: "3",
                    icon: <BoldOutlined />,
                    label: "Barcelona",
                  },
                  {
                    key: "4",
                    icon: <TrophyTwoTone />,
                    label: "Torneio de Flip",
                  },
                ]}
              />
            </Drawer>
          </Header>
        ) : (
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical" />
            <Menu
              theme="dark"
              mode="inline"
              onClick={handleMenuClick}
              defaultSelectedKeys={["0"]}
              items={[
                {
                  key: "0",
                  icon: <HolderOutlined />,
                  label: "Início",
                },
                {
                  key: "1",
                  icon: <CrownOutlined />,
                  label: "Excalibur",
                },
                {
                  key: "2",
                  icon: <FireOutlined />,
                  label: "Sensation",
                },
                {
                  key: "3",
                  icon: <BoldOutlined />,
                  label: "Barcelona",
                },
                {
                  key: "4",
                  icon: <TrophyTwoTone />,
                  label: "Torneio de Flip",
                },
              ]}
            />
          </Sider>
        )}

        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "20px",
                width: 65,
                height: 65,
              }}
            />
            <div>
              <h1>Flip BR</h1>
            </div>
          </Header>

          <Content
            style={{
              margin: "10px 10px",
              padding: 10,
              minHeight: 700,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {contentComponent}
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </>
  )
}
