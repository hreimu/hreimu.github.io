import React, {useContext} from "react";
import {List} from "antd";
import { Context} from "@/pages";
export function Directory() {

  const directorytContext = useContext(Context)
  const data = [
    {
      time: '2021-11-22',
      title: 'react'
    }
  ]
  return <List
    bordered
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <div className="post-header">
          <div className="post-meta">
            <strong>zjk</strong><em>·</em>{
            item.time
          }
          </div>
          <div className="post-title"
               onClick={()=>{
                 directorytContext.dispatch({
                   type: 'push',
                   path:'article'
                 })
               }}>{item.title}</div>
        </div>
      </List.Item>
    )}>
  </List>
}
