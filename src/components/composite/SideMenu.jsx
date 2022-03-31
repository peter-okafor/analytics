import React from 'react';
import { Menu } from 'antd';
import { Icon } from '../primary/Icon';
import './sidemenu.css';

const { SubMenu } = Menu;

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2' , 'sub3', 'sub4', 'sub5', 'sub6'];

const SideMenu = () => {
  const [openKeys, setOpenKeys] = React.useState(['sub1']);

  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    // try to wrap in styled content so I can modify
    <Menu 
      mode="inline" 
      openKeys={openKeys} 
      onOpenChange={onOpenChange} 
      style={{ width: 256 }} 
      className='menu'
      expandIcon={<Icon icon="right" style={{ width: "24px", top: "20%", color: "#E5E4EF" }} width={24} height={24} block={true} />}
    >
      <SubMenu 
        key="sub1" 
        icon={<Icon icon="people" width={24} height={24} block={true} />} 
        title="Admin" 
        style={{ color: "#696D8C", fontSize: 16, lineHeight: 24, height: 25, marginBottom:25 }}
      >
      </SubMenu>
      <SubMenu 
        key="sub2"
        icon={<Icon icon="check"  style={{ marginTop: 8 }} width={24} height={24} block={true} />} 
        title="Knowledge Base" 
        style={{ color: "#696D8C", fontSize: 16, lineHeight: 24, height: 25, marginBottom:25 }}
      >
      </SubMenu>
      <SubMenu 
        key="sub3"
        icon={<Icon icon="check"  style={{ marginTop: 8 }} width={24} height={24} block={true} />} 
        title="Train SAM" 
        style={{ color: "#696D8C", fontSize: 16, lineHeight: 24, height: 25, marginBottom:25 }}
      >
      </SubMenu>
      <SubMenu 
        key="sub4"
        icon={<Icon icon="calendar"  style={{ marginTop: 8 }} width={24} height={24} block={true} />} 
        title="Agent Inbox" 
        style={{ color: "#696D8C", fontSize: 16, lineHeight: 24, height: 25, marginBottom:25 }}
      >
      </SubMenu>
      <SubMenu 
        key="sub5"
        icon={<Icon icon="clock"  style={{ marginTop: 8 }} width={24} height={24} block={true} />} 
        title="Help Center" 
        style={{ color: "#696D8C", fontSize: 16, lineHeight: 24, height: 25, marginBottom:25 }}
      >
      </SubMenu>
      <SubMenu 
        key="sub6" icon={<Icon icon="messages"  style={{ marginTop: 8 }} width={24} height={24} block={true} />} 
        title="Help Center" 
        style={{ color: "#696D8C", fontSize: 16, lineHeight: 24, height: 25, marginBottom:25 }}
      >
        <Menu.Item key="9">Teams</Menu.Item>
        <Menu.Item key="10">Knowledge Base</Menu.Item>
        <Menu.Item key="11">Training SAM</Menu.Item>
        <Menu.Item key="12">Help Center</Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default SideMenu