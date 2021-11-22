import React, {useState} from "react";
import {Menu} from "antd";
import {UnorderedListOutlined} from '@ant-design//icons'
import './index.less'
// @ts-ignore
import yayImg from '/src/assets/images/menu.gif';

const {SubMenu} = Menu;

export function LeftMenu() {

  const menu = [
    {
      title: '前端',
      icon: yayImg,
      children: [{
        name: 'react'
      }]
    }
  ]

  const handleClick = () => {

  }

  return <>
    <Menu
      className={'left-menu'}
      theme={'dark'}
      onClick={handleClick}
      style={{height: 'calc(100vh)'}}
      defaultOpenKeys={['sub1']}
      mode="inline"
    >
      {
        menu.map(item =>
          <SubMenu
            key={item.title}
            icon={<img alt=""
                       src={item.icon}
                       width="30"
                       height="40"
                       className="thumbimage multimediaViewerScrollSet"
                       data-file-width="30"
                       data-file-height="40"/>}
            title={item.title}>
            {
              item.children.map(items =>
                <Menu.Item key={items.name}>{items.name}</Menu.Item>
              )
            }
          </SubMenu>)
      }
    </Menu>
  </>
}
