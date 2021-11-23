import React, {useContext} from "react";
import {List, Timeline} from "antd";
import {Context} from "@/pages";

export function Directory() {

  const directorytContext = useContext(Context)
  const data = [
    {
      time: '2021-11-23',
      title: 'useReducer useContext createContext的使用'
    },
    {
      time: '暂无',
      title: '暂无'
    }
  ]
  return (
    <Timeline style={{margin:'20px'}}>
      {
        data.map(item => {
          return (
            <Timeline.Item style={{paddingBottom:'40px'}} >
              <div className="post-title"
                   onClick={() => {
                     directorytContext.dispatch({
                       type: 'push',
                       path: 'article'
                     })
                   }}>{item.title}<span>{item.time}</span></div>
            </Timeline.Item>
          )
        })
      }
    </Timeline>
  )
}
