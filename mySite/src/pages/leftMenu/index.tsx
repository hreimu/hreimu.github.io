import React, {useContext} from "react";
import {Menu} from "antd";
import {Context} from "@/pages";
import './index.less'
// @ts-ignore
import yayImg from '/src/assets/images/menu.gif';

const {SubMenu} = Menu;

export function LeftMenu() {
  const leftContext = useContext(Context)
  const menu = [
    {
      title: '首页',
      icon: yayImg,
      key:'home'
    },
    {
      title: '前端',
      icon: yayImg,
      children: [{
        name: 'react',
        key:'react'
      }]
    }
  ]

  const handleClick = (e) => {
    leftContext.dispatch({
      type: 'push',
      path: e.key
    })
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
        menu.map(item => {
            return !item.children ?
              <Menu.Item key={item.key}>{item.title}</Menu.Item>
              :
              <SubMenu
                key={item.key}
                icon={<img alt=""
                           src={item.icon ? item.icon : ''}
                           width="30"
                           height="40"
                           className="thumbimage multimediaViewerScrollSet"
                           data-file-width="30"
                           data-file-height="40"/>}
                title={item.title}>
                {
                  item.children?.map(items =>
                    <Menu.Item key={items.key}>{items.name}</Menu.Item>
                  )
                }
              </SubMenu>
          }
        )
      }
    </Menu>
  </>
}
