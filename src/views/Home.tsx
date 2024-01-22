import { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  import type { MenuProps } from 'antd';
  import { Breadcrumb, Layout, Menu, theme } from 'antd';
  import {Outlet,useNavigate} from 'react-router-dom'
  
  const { Header, Content, Footer, Sider } = Layout;
  
  type MenuItem = Required<MenuProps>['items'][number];
  
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }
  
  const items: MenuItem[] = [
    getItem('栏目 1', '/page1', <PieChartOutlined />),
    getItem('栏目 2', '/page2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
      getItem('Tom', '3'),
      getItem('Bill', '4'),
      getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
  ];
  
  const View: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigateTo=useNavigate()
    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const menuClick=(e:{key:string})=>{
        console.log('点击了菜单',e.key);
        //点击跳转到相应路由，编程式导航 利用到一个hook
        navigateTo(e.key)
    }
  
    return (
      <Layout style={{ minHeight: '100vh' }}>
        {/* 左边侧边栏 */}
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="demo-logo-vertical" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={menuClick}/>
        </Sider>
        {/* 右边内容 */}
        <Layout>
            {/* 右侧头部 */}
          <Header style={{ paddingLeft: '16px', background: colorBgContainer }}>
             {/* 面包屑 */}
             <Breadcrumb style={{ lineHeight:'64px' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
             </Breadcrumb>
          </Header>
          {/* 右侧内容 白色底盒子*/}
          <Content style={{ margin: '16px 16px 0' ,
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,}}>
        
              {/* 窗口部分 */}
                <Outlet/>
          </Content>
          {/* 右侧底部 */}
          <Footer style={{ textAlign: 'center',padding:0,lineHeight:'48px'}}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  };
  
  export default View;